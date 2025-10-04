const Header = (props) => {
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
  
const Content = ({parts}) => {  
    return (
      <div>
        {parts.map(part => (
            <Part key={part.id} name={part.name} exo={part.exercises}/>
        ))}
      </div>
    )
  }

  
const Total = ({parts}) => {
    const total = parts.reduce((sum, part) =>
    {
        return sum + part.exercises
    },0)
    
    return (
      <div>
        Number of exercises = {total}
      </div>
    )
  }

  
const Course = (props) => {
 
    return (
        <div>
        <Header course={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
      </div>
    )
}


export default Course
