import { UserStateType, UserActionTypes } from '../../types';
import { SET_USERS } from './actionTypes';

const userState: UserStateType = {
  users: [],
};

const userReducer = (state = userState, action: UserActionTypes): UserStateType => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default userReducer;
