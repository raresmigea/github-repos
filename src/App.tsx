import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data/repos.json'; 

interface Account {
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
    <div className="App">
      test
    </div>
  );
}

export default App;
