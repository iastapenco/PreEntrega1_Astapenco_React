import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ListItemContainer from './components/ListItemContainer/ListItemContainer'

function App() {
  
  return (
    <>
      <NavBar />
      <ListItemContainer
      userName = "Pedro"
      greetings = "Bienvenido nuevamente" />
    </>
  )
}

export default App
