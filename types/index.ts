import { SET_USERS } from '../store/user/actionTypes';

export type UserType = {
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    country: string;
  };
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
    username: string;
    password: string;
  };
  phone: string;
  picture: {
    large: string;
    thumbnail: string;
  };
  nat: string;
};

export type UsersType = Array<UserType>;

export type UserListPropsType = {
  users: UsersType;
};

export type UserListItemPropsType = {
  user: UserType;
};

export type UserStateType = {
  users: UsersType;
};

export type UserActionTypes = SetUsersActionType;

export type SetUsersActionType = {
  type: typeof SET_USERS;
  payload: UsersType;
};

export type StoreStateType = {
  user: {
    users: UsersType;
  };
};
