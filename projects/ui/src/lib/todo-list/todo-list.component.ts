import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../data-access/src/lib/task';

@Component({
  selector: 'ui-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];

  @Output() toggle = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<{ id: string; title: string }>();

  editingId: string | null = null;
  editedTitle = '';

  startEdit(task: Task) {
    this.editingId = task.id;
    this.editedTitle = task.title;
  }

  saveEdit(taskId: string) {
    if (!this.editedTitle.trim()) return;

    this.edit.emit({ id: taskId, title: this.editedTitle });
    this.editingId = null;
    this.editedTitle = '';
  }

  cancelEdit() {
    this.editingId = null;
    this.editedTitle = '';
  }
}