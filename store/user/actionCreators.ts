import { UsersType, SetUsersActionType } from '../../types';
import { SET_USERS } from './actionTypes';

export const setUsers = (users: UsersType): SetUsersActionType => {
  return {
    type: SET_USERS,
    payload: users,
  };
};
