import DateCard from './DateCard';
import styles from './ExpenseItem.module.css'

function ExpenseItem(props) {
  const expenseData = props.expense;

  return <div className={styles['expense-item']} >
    <DateCard date={expenseData.date} />
    <p className={styles['expense-name']}>{expenseData.title}</p>
    <div className={styles['price-container']}>
      <span className={styles['currency-sign']}>$</span>
      <span className={styles['price']}>{expenseData.amount}</span>
    </div>
  </div >
}

export default ExpenseItem;