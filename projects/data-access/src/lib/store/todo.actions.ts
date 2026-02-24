import { createAction, props } from '@ngrx/store';
import { Task } from '../task';

export const loadTasks = createAction('[Todo] Load Tasks', props<{ tasks: Task[] }>());
export const addTask = createAction('[Todo] Add Task', props<{ task: Task }>());
export const toggleTask = createAction('[Todo] Toggle Task', props<{ id: string }>());
export const deleteTask = createAction('[Todo] Delete Task', props<{ id: string }>());
export const updateTask = createAction('[Todo] Update Task',props<{ id: string; title: string }>());