import './BarChart.css'
import ExpenseBar from './ExpenseBar';


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function BarChart(props) {
  const eSums = props.expensesSum;
  const total = eSums.reduce((pre, cur) => pre + cur)
  console.log(eSums);
  return <div className='expense-chart'>
    {months.map((monthName, idx) => {
      const height = total === 0 ? 0 : eSums[idx] * 100.0 / total
      return <ExpenseBar key={monthName} month={monthName} fillHeight={height} />
    })}
  </div>
}

export default BarChart;