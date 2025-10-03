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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content
        part1={part1.name} exercises1={part1.exercises}
        part2={part2.name} exercises2={part2.exercises}
        part3={part3.name} exercises3={part3.exercises}
      />
      
      <Total total= {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App