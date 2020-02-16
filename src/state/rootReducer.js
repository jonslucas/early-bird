import { combineReducers } from 'redux';
import tasks from './tasks/reducers';
import groups from './groups/reducers';

export default combineReducers({
  tasks,
  groups,
});
