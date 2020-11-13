import { UserType } from './../types/index';
import getBirthdayDate from '../utils/getBirthdayDate';

class UserService {
  _baseApiUrl = 'https://randomuser.me/api';

  getTwentyUsers = async () => {
    const response = await fetch(`${this._baseApiUrl}/?results=20`);
    const { results: users } = await response.json();

    users.forEach((user: UserType) => {
      user.dob.date = getBirthdayDate(user.dob.date);
    });

    return users;
  };
}

const userService = new UserService();

export default userService;
