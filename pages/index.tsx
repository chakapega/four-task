import SearchPanel from '../components/SearchPanel';
import UserList from '../components/UserList';
import { makeStyles } from '@material-ui/core/styles';
import userService from '../services/UserService';
import { StoreStateType, UsersType } from '../types';
import { initializeStore } from '../store';
import { setUsers } from '../store/user/actionCreators';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function Index(): JSX.Element {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <SearchPanel />
      <UserList />
    </main>
  );
}

export async function getServerSideProps(): Promise<{
  props: {
    initialReduxState: StoreStateType;
  };
}> {
  const { dispatch, getState } = initializeStore();
  const users: UsersType = await userService.getTwentyUsers();

  dispatch(setUsers(users));

  return { props: { initialReduxState: getState() } };
}
