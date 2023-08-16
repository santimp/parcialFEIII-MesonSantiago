import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'
import Home from './components/Home'
import Form from './components/Form/Form'

function App() {

  return (
    <>
    <div className='App'>
      <h1>Carga de estudiantes</h1>
      <form></form>
      <Home/>
      <Form/>
    </div>
    </>
  )
}

export default App
