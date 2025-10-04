import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Disp = (props) =>
{
  return (
    <p>
      {props.name} {props.nb}
    </p>
  )
}

const Stat = (props) => 
{
  const total = props.good + props.bad + props.neutral 
  const positiv = (props.good / total) * 100
  const average = (props.good - props.bad) / total
  return (
    <div>
    <Disp name='all' nb={total} />
    <Disp name='Positive' nb={positiv} />
    <Disp name='Average' nb={average} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>
  {
      setGood(good + 1)
  }

  const handleNeutral= () =>
  {
    setNeutral(neutral + 1)
  } 

  const handleBad = () =>
  {
      setBad(bad +1)
  }

  return (
    <div>
      <h1>
        Give Feedback
      </h1>
      <Button onClick={handleGood} text='good' />
 
      <Button onClick={handleNeutral} text='neutral' />
 
      <Button onClick={handleBad} text='bad' />

      <h1>
      Statistics
      </h1>
      <Disp name='good' nb={good}/>
      <Disp name='neutral' nb={neutral}/>
      <Disp name='bad' nb={bad}/>
      <Stat good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App