import { ADD_USER_DATA_INIT_STATE } from '../../constants/InitialState';
import { ADD_USER_DATA } from '../../constants/ActionTypes';

export default function users( state = ADD_USER_DATA_INIT_STATE, action ){
  switch(action.type) {
    case ADD_USER_DATA:
      return {
        ...state
      }
    default:
      return state;
  }
}
