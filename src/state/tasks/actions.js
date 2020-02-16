import {
  CREATE_TASK,
  DELETE_TASK,
  LOAD_TASKS,
} from './types';

export const createTask = (task) => ({
  type: CREATE_TASK,
  task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  tasks,
});
