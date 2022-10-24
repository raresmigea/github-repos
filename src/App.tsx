import { Paper, Table, TableContainer, TablePagination } from '@mui/material';
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

  const [list, setList] = useState<Array<Account>|null>(null);

  useEffect(()=> 
  setList(data), [])

  console.log('LIST: ', list);

  return (
    <div style={{display: 'flex', margin: '20px'}}>
       <Paper sx={{ width: '100%' }}>
         <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
             {list?.map(element => <List {...element} />)}
          </Table>
        </TableContainer>
        </Paper>
    </div>
  );
}

export default App;
