import ExpenseItem from './ExpenseItem';
import styles from './Expenses.module.css'
import NoExpense from './NoExpense';



function Expenses(props) {

  return <div className={styles['expenses-container']}>
    <div className={styles['expenses']}>
      {props.expenses.length === 0 && <NoExpense />}
      {props.expenses.map(exp => <ExpenseItem key={exp.id} expense={exp} />)}
    </div>
  </div>
}

export default Expenses;