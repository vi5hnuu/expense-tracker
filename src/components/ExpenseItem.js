import DateCard from './DateCard';
import './ExpenseItem.css'

function ExpenseItem(props) {
  const expenseData = props.expense;

  return <div className='expense-item' >
    <DateCard date={expenseData.date} />
    <p className='expense-name'>{expenseData.title}</p>
    <div className='price-container'>
      <span className='currency-sign'>$</span>
      <span className='price'>{expenseData.amount}</span>
    </div>
  </div >
}

export default ExpenseItem;