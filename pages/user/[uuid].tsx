import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { StoreStateType } from '../../types';

export default function User(): JSX.Element {
  const {
    query: { uuid },
  } = useRouter();

  const users = useSelector((state: StoreStateType) => state.user.users);

  console.log(users);

  // const user = users.filter((user) => user.login.uuid === uuid);

  // console.log(user);

  return <h1>user</h1>;
}
