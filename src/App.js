import { Fragment } from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  return <Fragment>
    <header className='header'>
      <button className='btn-addExpense'>Add Expense</button>
    </header>
    <Main />
    <footer className='footer'>
      &copy;Copyright 2023 (vishnu kumar)
    </footer>
  </Fragment>
}

export default App;
