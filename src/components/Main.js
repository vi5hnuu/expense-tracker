import Expenses from './Expenses';
import BarChart from './BarChart';
import './Main.css'
import { useState } from 'react';

function Main(props) {
  const expenses = props.expenses
  const [filterYear, setFilterYear] = useState(2020)
  const expensesSum = new Array(12).fill(0, 0, 12)
  //////////////
  expenses.forEach(expense => {
    if (filterYear == expense.date.getFullYear()) {
      expensesSum[expense.date.getMonth()] += +expense.amount
    }
  })
  //////////////
  function onFilterYearChangeHandler(evnt) {
    setFilterYear(evnt.target.value);
  }
  return <section className='main'>
    <div className='actions'>
      <p>Filter By Year</p>
      <select onChange={onFilterYearChangeHandler} id="year">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
    <BarChart expensesSum={expensesSum} />
    <Expenses expenses={expenses} />
  </section>
}

export default Main;