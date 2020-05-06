import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {text === "Positive:" && "%"}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = () => parseFloat((good*1 + neutral*0 + bad*(-1)) / all).toFixed(2)
  const positive = () => Math.round((good / all) * 100)
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given yet.</p>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good:" value={good} />
        <StatisticLine text="Neutral:" value={neutral} />
        <StatisticLine text="Bad:" value={bad} />
        <StatisticLine text="All:" value={all} />
        <StatisticLine text="Average:" value={average()} />
        <StatisticLine text="Positive:" value={positive()} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
