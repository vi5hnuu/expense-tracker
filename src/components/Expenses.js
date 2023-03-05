import ExpenseItem from './ExpenseItem';
import './Expenses.css'



function Expenses(props) {

  return <div className='expenses-container'>
    <div className='expenses'>
      {props.expenses.map(exp => <ExpenseItem key={exp.id} expense={exp} />)}
    </div>
  </div>
}

export default Expenses;