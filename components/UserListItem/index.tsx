import { TableRow, TableCell, Avatar } from '@material-ui/core';
import { UserListItemPropsType } from '../../types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableRow: {
    cursor: 'pointer',
    '&:hover': {
      background: '#cde6e6',
    },
  },
});

export default function UserListItem({ user }: UserListItemPropsType): JSX.Element {
  const classes = useStyles();

  const {
    login: { uuid },
    picture: { thumbnail },
    name: { first, last },
    dob: { date },
    email,
    phone,
    location: {
      country,
      city,
      street: { name, number },
    },
  } = user;

  return (
    <Link href={`/user/${uuid}`}>
      <TableRow className={classes.tableRow}>
        <TableCell>
          <Avatar alt={`${first} ${last}`} src={thumbnail} />
        </TableCell>
        <TableCell>{`${first} ${last}`}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell>{`${country},${city},${name} ${number}`}</TableCell>
      </TableRow>
    </Link>
  );
}
