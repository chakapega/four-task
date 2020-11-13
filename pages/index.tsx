import SearchPanel from '../components/SearchPanel';
import UserList from '../components/UserList';
import { makeStyles } from '@material-ui/core/styles';
import userService from '../services/UserService';
import { IndexPropsType, UsersType } from '../types';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function Index({ users }: IndexPropsType): JSX.Element {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <SearchPanel />
      <UserList users={users} />
    </main>
  );
}

export async function getServerSideProps(): Promise<{ props: { users: UsersType } }> {
  const users: UsersType = await userService.getTwentyUsers();

  return { props: { users } };
}
