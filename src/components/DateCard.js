import './DateCard.css'


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function DateCard(props) {
  console.log("DATE CARD");

  const date = props.date
  return <div className='date-container'>
    <span className='month'>{monthNames[date.getMonth()]}</span>
    <span className='year'>{date.getFullYear()}</span>
    <span className='date'>{date.getDate()}</span>
  </div>
}

export default DateCard;