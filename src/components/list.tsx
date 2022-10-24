
import TableCell from '@mui/material/TableCell';

import { Account } from '../App';

const List = (listInfo: Account) => {
  return <TableCell key={listInfo.name}>
            {listInfo.name}
        </TableCell>;

};

export default List;



