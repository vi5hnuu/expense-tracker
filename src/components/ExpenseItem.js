import DateCard from './DateCard';
import './ExpenseItem.css'

function ExpenseItem(props) {
  return <div className='expense-item'>
    <DateCard />
    <p className='expense-name'>New Hp Laotop</p>
    <div className='price-container'>
      <span className='currency-sign'>$</span>
      <span className='price'>1400</span>
    </div>
  </div>
}

export default ExpenseItem;