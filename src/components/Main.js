import Expenses from './Expenses';
import BarChart from './BarChart';
import './Main.css'

function Main() {
  return <div className='main'>
    <div className='actions'>
      <p>Filter By Year</p>
      <select id="year">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
    <BarChart />
    <Expenses />
  </div>
}

export default Main;