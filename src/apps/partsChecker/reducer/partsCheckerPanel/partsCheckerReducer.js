import { combineReducers } from 'redux';
import users from '../partsCheckerPanel/users'

const partsCheckerReducer = combineReducers({
  users
});

export default partsCheckerReducer;
