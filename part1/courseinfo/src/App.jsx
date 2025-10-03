const Header = (props) => {
  console.log(props)
  return (
    <h1>
       {props.course}
    </h1>
  )
}


const Part = (props) => {
  return (
    <p>
      {props.name} {props.exo} 
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part name = {props.part1} exo = {props.exercises1} />
    <Part name = {props.part2} exo = {props.exercises2} />
    <Part name = {props.part3} exo = {props.exercises3} />  
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises = {props.total}
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content
        part1={parts[0].name} exercises1={parts[0].exercises}
        part2={parts[1].name} exercises2={parts[1].exercises}
        part3={parts[2].name} exercises3={parts[2].exercises}
      />
      
      <Total total= {parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App