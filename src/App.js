import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

import Trader from './components/trader/Trader';
function App() {
  return (
    <div className='App'>
      <button>HAHAHHA </button>
      <Button variant='danger'>Primary</Button>
      <div className='d-flex'>
        <Trader />
        <Trader />
      </div>
    </div>
  );
}

export default App;
