import { combineReducers } from 'redux';
import selectionReducer from './selectionReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  selection: selectionReducer,
  form: formReducer
});
