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

export type IndexPropsType = {
  users: UsersType;
};

export type UserListPropsType = {
  users: UsersType;
};

export type UserListItemPropsType = {
  user: UserType;
};
