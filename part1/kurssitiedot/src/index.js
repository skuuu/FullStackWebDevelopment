import React from 'react'
import ReactDOM from 'react-dom'

const App = () => { //parts coursen sisällä, name myös
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
      <Header header = {course.name} />
      <Content content = {course.parts}/>
      <Total total = {course.parts} />
    </div>
  )
}
const Header = (props) => {
  return (
     <div>
      <h1>
        {props.header}
      </h1>
    </div>
  )
}
const Content = (props) => {
   return (
    <div>
      <p>
        <Part part = {props.content[0]}/>
        <Part part = {props.content[1]}/>
        <Part part = {props.content[2]} />
      </p>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
 )
}
const Total = (props) => {
  let total = 0
  props.total.forEach(element => {
    total += element.exercises
  });
  return (
    <div> 
      <p> 
        Number of exercises {total}
      </p>
    </div>
   )
 }

ReactDOM.render(<App />, document.getElementById('root'))