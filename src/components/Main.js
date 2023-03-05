import Expenses from './Expenses';
import BarChart from './BarChart';
import styles from './Main.module.css'
import { useState } from 'react';

function Main(props) {
  const [filterYear, setFilterYear] = useState(2020)
  const expenses = props.expenses.filter(expense => expense.date.getFullYear() == filterYear)
  const expensesSum = new Array(12).fill(0, 0, 12)
  //////////////
  expenses.forEach(expense => {
    expensesSum[expense.date.getMonth()] += +expense.amount
  })
  //////////////
  function onFilterYearChangeHandler(evnt) {
    setFilterYear(evnt.target.value);
  }
  return <section className={styles['main']}>
    <div className={styles['actions']}>
      <p>Filter By Year</p>
      <select onChange={onFilterYearChangeHandler} id={styles["year"]}>
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