import SearchPanel from '../components/SearchPanel';
import UserList from '../components/UserList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Index: React.FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <SearchPanel />
      <UserList />
    </main>
  );
};

export default Index;
