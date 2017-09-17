import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { todos } from './todosReducer.js';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  todos
})
