import { Fragment, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import Main from './components/Main'


const demo_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setNewExpenses] = useState(demo_expenses)

  function onNewExpense(nwExp) {
    setNewExpenses((oldExps) => {
      return [nwExp, ...oldExps]
    })
  }
  console.log("APP");
  return <Fragment>
    <header className='header'>
      <div className='new-expense__container'>
        <ExpenseForm onNewExpense={onNewExpense} />
      </div>
    </header>
    <Main expenses={expenses} />
    <footer className='footer'>
      &copy;Copyright 2023 (vishnu kumar)
    </footer>
  </Fragment>
}

export default App;
