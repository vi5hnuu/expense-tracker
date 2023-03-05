import styles from './ExpenseBar.module.css'

function ExpenseBar(props) {
  return <div className={styles['expense-bar']}>
    <div className={styles['progress']}>
      <div className={styles['fill']} style={{ "height": `${props.fillHeight}%` }}></div>
    </div>
    <p className={styles['month']} >{props.month}</p>
  </div>
}

export default ExpenseBar;