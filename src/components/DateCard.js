import styles from './DateCard.module.css'


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function DateCard(props) {
  console.log("DATE CARD");

  const date = props.date
  return <div className={styles['date-container']}>
    <span className={styles['month']}>{monthNames[date.getMonth()]}</span>
    <span className={styles['year']}>{date.getFullYear()}</span>
    <span className={styles['date']}>{date.getDate()}</span>
  </div>
}

export default DateCard;