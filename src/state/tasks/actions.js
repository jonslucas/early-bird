import {
  CREATE_TASK,
  DELETE_TASK,
  LOAD_TASKS,
} from './types';

export const createTask = (id, label) => ({
  type: CREATE_TASK,
  id,
  label,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  tasks,
});
