import './ExpenseBar.css'

function ExpenseBar(props) {
  return <div className='expense-bar'>
    <div className='progress'>
      <div className='fill'></div>
    </div>
    <p className='month' >Jan</p>
  </div>
}

export default ExpenseBar;