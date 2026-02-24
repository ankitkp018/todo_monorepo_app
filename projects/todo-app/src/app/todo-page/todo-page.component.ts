import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../data-access/src/lib/task'
import { StorageService } from '../../../../core/src/lib/storage.service';
import * as TodoActions from '../../../../data-access/src/lib/store/todo.actions';
import { selectTasks } from '../../../../data-access/src/lib/store/todo.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  newTaskTitle = '';

  constructor(private store: Store,
    private storage: StorageService,
    private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    const savedTasks = this.storage.loadTasks();
    this.store.dispatch(TodoActions.loadTasks({ tasks: savedTasks }));
    this.tasks$ = this.store.select(selectTasks);
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    const task: Task = {
      id: Date.now().toString(),
      title: this.newTaskTitle,
      completed: false
    };

    this.store.dispatch(TodoActions.addTask({ task }));
    this.newTaskTitle = '';
    this.syncStorage();
  }

  toggleTask(id: string) {
    this.store.dispatch(TodoActions.toggleTask({ id }));
    this.syncStorage();
  }

  deleteTask(id: string) {
    this.store.dispatch(TodoActions.deleteTask({ id }));
    this.syncStorage();
  }

  editTask(event: { id: string; title: string }) {
    this.store.dispatch(
      TodoActions.updateTask({ id: event.id, title: event.title })
    );
    this.syncStorage();
  }

  changeLanguage(lang: 'en' | 'hi' | 'es') {
    this.translate.use(lang);
  }

  private syncStorage() {
    this.tasks$.subscribe(tasks => {
      this.storage.saveTasks(tasks);
    }).unsubscribe();
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'http://localhost:4201';
  }
}
