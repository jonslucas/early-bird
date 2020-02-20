import {
  CREATE_GROUP,
  DELETE_GROUP,
  MOVE_TASK,
  LOAD_GROUPS,
  ADD_TASK,
  REMOVE_TASK,
} from './types';

export const createGroup = (group) => ({
  type: CREATE_GROUP,
  group,
});

export const deleteGroup = (id) => ({
  type: DELETE_GROUP,
  id,
});

export const addTask = (id, taskId) => ({
  type: ADD_TASK,
  id,
  taskId,
});

export const removeTask = (id, taskId) => ({
  type: REMOVE_TASK,
  id,
  taskId,
});

export const moveTask = (taskId, srcId, dstId) => ({
  type: MOVE_TASK,
  taskId,
  srcId,
  dstId,
});

export const loadGroups = (groups) => ({
  type: LOAD_GROUPS,
  groups,
});
