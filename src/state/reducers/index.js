import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { authReducer } from './authReducer';

const reducers = combineReducers({
  posts: postsReducer,
  auth: authReducer
});

export default reducers