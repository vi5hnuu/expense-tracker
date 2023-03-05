import styles from './BarChart.module.css'
import ExpenseBar from './ExpenseBar';


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function BarChart(props) {
  const eSums = props.expensesSum;
  const total = eSums.reduce((pre, cur) => pre + cur, 0.0)
  console.log(eSums);
  return <div className={styles['expense-chart']}>
    {months.map((monthName, idx) => {
      const height = total === 0 ? 0 : eSums[idx] * 100.0 / total
      return <ExpenseBar key={monthName} month={monthName} fillHeight={height} />
    })}
  </div>
}

export default BarChart;