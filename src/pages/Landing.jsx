import axios from "axios";
import { useLoaderData } from "react-router-dom"
import CocktailList from "../components/CocktailList";
import FoodList from "../components/FoodList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context/context";




const cocktailCategorySearch =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';





const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    }
  }
}

// search for category drinks
const searchCocktailsCategoryQuery = (category) => {
  return {
    queryKey: ['filter', category],
    queryFn: async () => {
      const response = await axios.get(`${cocktailCategorySearch}${category}`)
      // console.log(response.data.drinks);
      return response.data.drinks
    }
  }
}

const searchFoodQuery = (searchTerm) => {
  return {
    queryKey: ['meal', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.request({
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe', method: 'GET', headers: {
          'X-RapidAPI-Key': '2756518c16msh4a2d7cb476360ecp1c9bedjsn2f91e91e44e0',
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }, params: { query: `${searchTerm}` }
      })

      return response.data

    }
  }
}

// add recipe end point and logic for switch!!



// find a way to pass search term and category 
export const loader = (queryClient) => async ({ request }) => {



  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))

  const category = 'Cocktail'
  await queryClient.ensureQueryData(searchCocktailsCategoryQuery(category))


  const food = await queryClient.ensureQueryData(searchFoodQuery(searchTerm ? searchTerm : 'all'))

  return {
    searchTerm, category,
    food
  }


  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)

  // return {
  //   // drinks: response.data.drinks,

  //   // searchTerm,


  //   // category
  // }
}


const Landing = () => {

  const { databaseSwitch, drinkCategory, searchSwitch } = useGlobalContext()

  const {
    // drinks,
    searchTerm } = useLoaderData()

  // find a way to decide which data to pass


  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))

  const { data: filteredDrinks } = useQuery(searchCocktailsCategoryQuery(drinkCategory))


  const { data: food } = useQuery(searchFoodQuery(searchTerm))


  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      {/* <CocktailList drinks={drinks} /> */}

      {databaseSwitch ? <CocktailList drinks={searchSwitch ? drinks : filteredDrinks} /> : <FoodList food={food} />}

      {/* <CocktailList drinks={searchSwitch ? drinks : filteredDrinks} /> */}
    </>
  )
}
export default Landing