import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const History = (props) => {  
  if (props.allClicks == 0) {
    return (     
      <div>        
          No Feedback given    
      </div>    
    )  
  }  
  return (    
    <div>      
    <Statistics good={props.good} neutral={props.neutral} bad={props.bad} />
    </div>  )
    }

const StatisticLine = ({text, value}) =>
{
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>    
  )
}

const Statistics = ({good, neutral, bad}) => 
{
  const total = good + bad + neutral 
  const positiv = (good / total) * 100
  const average =  (good + bad * -1) / total
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positiv} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGood = () =>
  {
      setGood(good + 1)
      setAll(allClicks + 1)
  }

  const handleNeutral= () =>
  {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  } 

  const handleBad = () =>
  {
      setBad(bad +1)
      setAll(allClicks + 1)
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
      <History allClicks={allClicks} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App