import { useEffect, useState } from 'react'

import './App.css'

import CardTile from './components/CardTile'
import NavbarTile from './components/NavbarTile'
import useFetchData from './utils/fetch'
import axios from 'axios';
import CardList from './components/CardList'

function App() {

  const { list } = useFetchData()


  // const options = {
  //   method: 'GET',
  //   url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
  //   params: {
  //     query: 'italian wedding soup'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '2756518c16msh4a2d7cb476360ecp1c9bedjsn2f91e91e44e0',
  //     'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
  //   }
  // };


  // const getData = async () => {
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);


  return (

    <>
      <NavbarTile />
      <CardList list={list} />
    </>

  )
}

export default App

