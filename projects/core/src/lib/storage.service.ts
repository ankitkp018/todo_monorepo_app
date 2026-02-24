import { Injectable } from '@angular/core';
import { Task } from '../../../data-access/src/lib/task';

const STORAGE_KEY = 'todo_tasks';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  loadTasks(): Task[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}