import { useEffect, useState } from 'react'

import './App.css'

import CardTile from './components/CardTile'
import NavbarTile from './components/NavbarTile'
import FetchData from './utils/fetch'


function App() {

  useEffect(() => {
    FetchData()
  }, [])


  return (

    <>
      <NavbarTile />
      <CardTile />
    </>

  )
}

export default App
