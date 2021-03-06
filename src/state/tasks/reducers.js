import {
  CREATE_TASK,
  DELETE_TASK,
  LOAD_TASKS,
} from './types';

const template = {
  label: '',
  comments: [],
  assignedTo: null,
  watchers: [],
  tags: [],
};

const initialState = {
  1: {
    label: 'Create Portfolio to Assist with Finding a New Job',
    comments: [],
    assignedTo: null,
    watchers: [],
    tags: [],
  },
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return {
        ...state,
        ...action.tasks,
      };
    case CREATE_TASK: {
      const { id, label } = action;
      return {
        ...state,
        [id]: {
          ...template,
          label,
        },
      };
    }
    case DELETE_TASK: {
      const { id } = action;
      return Object.keys(state).filter((k) => k !== id).reduce((curr, acc) => ({
        ...acc,
        ...state[curr],
      }), {});
    }
    default:
      return state;
  }
};

export default tasks;
