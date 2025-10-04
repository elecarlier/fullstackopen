import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Stat = (props) =>
{
  return (
    <p>
      {props.name} {props.nb}
    </p>
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
      <Stat name='good' nb={good}/>
      <Stat name='neutral' nb={neutral}/>
      <Stat name='bad' nb={bad}/>
    </div>
  )
}

export default App