import { TableRow, TableCell, Avatar } from '@material-ui/core';
import { UserListItemPropsType } from '../../types';

export default function UserListItem({ user }: UserListItemPropsType): JSX.Element {
  const {
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
    <TableRow>
      <TableCell>
        <Avatar alt={`${first} ${last}`} src={thumbnail} />
      </TableCell>
      <TableCell>{`${first} ${last}`}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{`${country},${city},${name} ${number}`}</TableCell>
    </TableRow>
  );
}
