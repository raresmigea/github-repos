
import { Link, TableCell } from '@mui/material';
import TableRow from '@mui/material/TableRow';

import { Account } from '../App';

const List = (listInfo: Account) => {
  return <TableRow key={listInfo.name}>
            <TableCell><Link href={listInfo.link}>{listInfo.name}</Link></TableCell>
            <TableCell>🌟 {listInfo.stars}</TableCell>
            <TableCell>🍴 {listInfo.forks}</TableCell>
        </TableRow>;

};

export default List;



