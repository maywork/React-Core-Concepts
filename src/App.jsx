import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'

function App() {

  const books = [
    {id:1, name: 'The Alchemist', author: 'Paulo Coelho', price: 200},
    {id:2, name: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma', price: 250},
    {id:3, name: 'The 5 AM Club', author: 'Robin Sharma', price: 300},
    {id:4, name: 'The Power of Subconscious Mind', author: 'Joseph Murphy', price: 150}
  ]

  const actors = ['Sakib', 'Shoriful Raj', 'Manna', 'Razzak', 'Salman Shah']
  const singers = [
    {id:1, name: 'Eva Rahman', age: 38},
    {id:2, name: 'James', age: 45},
    {id:3, name: 'Shafin Ahmed', age: 50},
    {id:4, name: 'Ayub Bachchu', age: 60},
    {id:5, name: 'Habib Wahid', age: 45},
    {id:6, name: 'Pritom', age: 28},
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <Bookstore books={books}></Bookstore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={'Bappa Raz'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* Todo List */}
      <Todo
        taskNumber='1'
        task='Finish Module'
        isDone={false}></Todo>
      <Todo
        taskNumber='2'
        task='Chai aur React'
        isDone={false}></Todo>
      <Todo
        taskNumber='3'
        task='Conceptual Session'
        isDone={false}></Todo>
      
      <Person />
      <Device name='Laptop' price='55' />
      <Device name='Mobile' price='46' />
      <Device name='Watch' price='4' />
      
      <div style={{display: 'flex'}}>
      <Student name='Collin' grade='7' score='99' />
      <Student name='Mayesha' grade='9' score={97}/>
      <Student />
      </div>
      <Developer />
    </>
  )
}

function Device(props) {
  return <h2>This device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 25
  const person = {name: 'John', age: 32}
  return <h3>I am a {person.name}, I am {age} years old.</h3>
}

function Student({name='Not Admitted', grade=1, score=0}) {
  return (
  <div className='student'>
    <h1>Student</h1>
    <p>Name: {name}</p>
    <p>Grade: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer () {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid crimson',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h3>Devo Devo</h3>
      <p>Coding:</p>
    </div>
  )
}

export default App
