import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { About, HomeLayout, Error, Landing, Recipe, SinglePageError, Cocktail } from './pages'

import './App.css'


// import useFetchData from './utils/fetch'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import AppContext from './context/context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
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
    <AppContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppContext>
    // <>
    //   <NavbarTile />
    //   <CardList list={list} />
    // </>
  )
}

export default App

