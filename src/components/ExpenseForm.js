import { useRef } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
  console.log("EXPENSE FORM");

  const titleRef = useRef(null)
  const amountRef = useRef(null)
  const dateRef = useRef(null)

  function addExpense(evnt) {
    evnt.preventDefault()
    const title = titleRef.current.value
    const amount = Number.parseFloat(amountRef.current.value)
    const date = new Date(dateRef.current.value)
    const expenseData = { id: Math.random().toString(), title, amount, date }
    titleRef.current.value = ''
    amountRef.current.value = ''
    dateRef.current.value = ''
    props.onNewExpense(expenseData)
  }
  return <form onSubmit={addExpense} className='new_expense__form'>
    <div className='new_expense__control'>
      <label htmlFor='title'>Title</label>
      <input ref={titleRef} id='title' type="text" placeholder='New HP Laptop' />
    </div>
    <div className='new_expense__control'>
      <label htmlFor='amount'>Amount</label>
      <input ref={amountRef} id='amount' type="number" placeholder='1400' />
    </div>
    <div className='new_expense__control'>
      <label htmlFor='date'>Date</label>
      <input ref={dateRef} id='date' type="date" min='2023-03-03' />
    </div>
    <div className='new_expense__actions'>
      <button type='submit' className='btn__add'>Add</button>
    </div>
  </form>
}

export default ExpenseForm