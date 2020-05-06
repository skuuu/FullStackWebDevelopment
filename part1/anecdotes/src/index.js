import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(-1)

  const giveVote = () => {
    const copy = [ ...votes]
    copy[selected] += 1   
    setVote(copy)
    if (copy[selected]>copy[mostVoted] || mostVoted === -1) {
      setMostVoted(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes </p>
      <Button handleClick={() => giveVote()} text="vote" />
      <Button handleClick={() => setSelected(randomAnecdote)} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{MostVotedAnecdoteLine(mostVoted)}</p>
      <p>{MostVotedVotesLine(votes, mostVoted)}</p>
    </div>
  )
}

const MostVotedVotesLine = (votes, mostVoted) => {
  if (mostVoted === -1) {
    return ""
  }
  return (`has ${votes[mostVoted]} votes`)
}

const MostVotedAnecdoteLine = (mostVoted) => {
  if (mostVoted === -1) {
    return "No votes yet."
  }
  return anecdotes[mostVoted]
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const randomAnecdote = () => {
  const min = Math.ceil(0);
  const max = Math.floor(6);
  return Math.floor(Math.random() * (max - min)) + min
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)