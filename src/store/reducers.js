import { combineReducers } from 'redux';

// Reducers
import { UserReducer } from './../scenes/user/reducer';

export const Reducers = combineReducers({
  user: UserReducer
}); 