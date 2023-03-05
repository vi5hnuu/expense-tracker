import './ExpenseBar.css'

function ExpenseBar(props) {
  return <div className='expense-bar'>
    <div className='progress'>
      <div className='fill' style={{ "height": `${props.fillHeight}%` }}></div>
    </div>
    <p className='month' >{props.month}</p>
  </div>
}

export default ExpenseBar;