import { Paper, Table, TableContainer, TablePagination, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/list';
import data from './data/repos.json'; 

export interface Account {
  name: string;
  stars: number;
  forks: number;
  link: string;
}

function App() {

  const [list, setList] = useState<Array<Account>|[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  useEffect(()=> 
  setList(data), [])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log('LIST: ', list);

  return (
    <div style={{display: 'flex', margin: '20px'}}>
       <Paper sx={{ width: '100%' }}>
        <Typography variant="h4" style={{margin: '10px'}}>Github repos list</Typography>
         <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
             {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(element => <List {...element} />)}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    </div>
  );
}

export default App;
