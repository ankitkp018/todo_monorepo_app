import { createReducer, on } from '@ngrx/store';
import { Task } from '../task';
import * as TodoActions from './todo.actions';

export interface TodoState {
  tasks: Task[];
}

export const initialState: TodoState = {
  tasks: []
};

export const todoReducer = createReducer(
  initialState,

  on(TodoActions.loadTasks, (state, { tasks }) => ({
    ...state,
    tasks
  })),

  on(TodoActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),

  on(TodoActions.toggleTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  })),

  on(TodoActions.deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(t => t.id !== id)
  })),

  on(TodoActions.updateTask, (state, { id, title }) => ({
  ...state,
  tasks: state.tasks.map(task =>
    task.id === id ? { ...task, title } : task
  )
}))

);