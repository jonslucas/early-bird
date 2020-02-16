import {
  CREATE_GROUP,
  DELETE_GROUP,
  MOVE_TASK,
  LOAD_GROUPS,
} from './types';

export const createGroup = (group) => ({
  type: CREATE_GROUP,
  group,
});

export const deleteGroup = (id) => ({
  type: DELETE_GROUP,
  id,
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
