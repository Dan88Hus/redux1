import {combineReducers} from 'redux';
import postReducer from './postReducer';
import usersReduser from './usersReduser';
import userReducer from './usersReduser';


export default combineReducers ({
  posts: postReducer,
  users: usersReduser

  // dummy: () => 'hi there'
});
