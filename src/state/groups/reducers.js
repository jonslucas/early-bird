import {
  CREATE_GROUP,
  DELETE_GROUP,
  LOAD_GROUPS,
  MOVE_TASK,
  ADD_TASK,
  REMOVE_TASK,
} from './types';

const initialState = {
  1: {
    label: 'Backlog',
    items: [],
  },
  2: {
    label: 'Active',
    items: [1],
  },
  3: {
    label: 'Review',
    items: [],
  },
  4: {
    label: 'Complete',
    items: [],
  },
};

const groups = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GROUPS:
      return {
        ...state,
        ...action.groups,
      };
    case CREATE_GROUP: {
      const { id, data } = action.task;
      return {
        ...state,
        [id]: data,
      };
    }
    case DELETE_GROUP: {
      const { id } = action;
      return Object.keys(state).filter((k) => k !== id).reduce((curr, acc) => ({
        ...acc,
        ...state[curr],
      }), {});
    }
    case MOVE_TASK: {
      const { taskId, srcId, dstId } = action;
      return {
        ...state,
        [srcId]: {
          ...state[srcId],
          items: state[srcId].items.filter((elem) => elem !== taskId),
        },
        [dstId]: {
          ...state[dstId],
          items: [...state[dstId].items, taskId],
        },
      };
    }
    case REMOVE_TASK: {
      const { id, taskId } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          items: state[id].items.filter((elem) => elem !== taskId),
        },
      };
    }
    case ADD_TASK: {
      const { id, taskId } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          items: [...state[id].items, taskId],
        },
      };
    }
    default:
      return state;
  }
};

export default groups;
