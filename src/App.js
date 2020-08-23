import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Stock from './components/stock/Stock';
import Trader from './components/trader/Trader';
import TopNav from './components/top-nav/TopNav';
function App() {
  return (
    <div className='App'>
      <TopNav />
      <div className='d-flex'>
        <Stock />
        <Stock />

        <Trader />
      </div>
    </div>
  );
}

export default App;
