import { combineReducers } from 'redux';
import selectionReducer from './selectionReducer';

export default combineReducers({
  selection: selectionReducer
});
