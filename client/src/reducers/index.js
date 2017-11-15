import { combineReducers } from 'redux';
import selectionReducer from './selectionReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
export default combineReducers({
  selection: selectionReducer,
  form: formReducer,
  auth: authReducer
});
