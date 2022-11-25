import { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpensesEditForm from '../ExpensesEditForm/ExpensesEditForm';
import ExpensesInsertForm from '../ExpensesInsertForm/ExpensesInsertForm';
import ExpensesList from '../ExpensesList/ExpensesList';
import Header from '../Header/Header';
import './App.css';

function App() {

  const tipoDeFormulario = useSelector(({wallet}) => (wallet.tipoFormulario));

  return (
    <div className="App">
      <Header />
      {tipoDeFormulario}
      {tipoDeFormulario && tipoDeFormulario === 'inclusao' &&
        <ExpensesInsertForm />
      }
      {tipoDeFormulario && tipoDeFormulario === 'alteracao' &&
        <ExpensesEditForm />
      }
      <hr/>
      <ExpensesList />
    </div>
  );
}

export default App;
