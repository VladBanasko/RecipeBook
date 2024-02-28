import { useEffect, useState } from 'react'

import { About, HomeLayout, Error, Landing, Recipe, SinglePageError, Cocktail } from './pages'

import './App.css'

import CardTile from './components/CardTile'
import NavbarTile from './components/NavbarTile'
import useFetchData from './utils/fetch'
import axios from 'axios';
import CardList from './components/CardList'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { loader as landingLoader } from './pages/Landing'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError />,
        element: <Landing />
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />
      },
      {
        path: 'recipe',
        element: <Recipe />
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  },

])

function App() {

  // const { list } = useFetchData()
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
    <RouterProvider router={router} />
    // <>
    //   <NavbarTile />
    //   <CardList list={list} />
    // </>
  )
}

export default App

