import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )

}
const Content = (props) => {
  return (
    <>
      {props.course.parts.map((course) => (
        <Part name={course.name} exercises={course.exercises}></Part>
      ))}
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts.map(c => c.exercises).reduce((a, b) => a + b, 0)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))