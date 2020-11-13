import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserListPropsType } from '../../types';
import UserListItem from '../UserListItem';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '96%',
    backgroundColor: '#edf3f3',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '0',
    },
  },
}));

export default function UserList({ users }: UserListPropsType): JSX.Element {
  const classes = useStyles();

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Avatar</TableCell>
          <TableCell>Full name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Location</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <UserListItem key={user.login.uuid} user={user} />
        ))}
      </TableBody>
    </Table>
  );
}
