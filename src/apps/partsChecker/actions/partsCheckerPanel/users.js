import { ADD_USER_DATA } from '../../constants/ActionTypes';
import { USERS_API } from '../../constants/Endpoints';

export function addUserData(data) {
  return { type: ADD_USER_DATA, data }
}

export function addingUserData(userInputData){
  return function (dispatch){
    fetch(USERS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInputData)})
      .then(res=>res.json())
      .then(res=>{
       dispatch(addUserData(res));
       console.log('ressss', res);
      })
  }
}

