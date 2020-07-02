import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td><td> {value}</td>
    </tr>
  )
}


const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>

      </div>
    )
  }

}
const Button = (props) => {
  return (
    <div>
      <button onClick={props.incrementGood}>good</button>
      <button onClick={props.incrementNeutral}>neutral</button>
      <button onClick={props.incrementBad}>bad</button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const all = () => { return (good + bad + neutral) }
  const average = () => { return (good - bad) / (good + neutral + bad) }
  const positiveRate = () => { return (good / (good + bad + neutral)) * 100.0 + '%' }
  return (
    <div>
      <h1>give feedback</h1>
      <Button incrementGood={() => { setGood(good + 1) }} incrementNeutral={() => { setNeutral(neutral + 1) }} incrementBad={() => { setBad(bad + 1) }}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all()} average={average()} positive={positiveRate()}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)