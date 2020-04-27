import React from 'react';
import { Header, Balance, IncomeExpenses, TransactionList, AddTransaction } from './components';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container"> 
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
