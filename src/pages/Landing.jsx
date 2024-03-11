import axios from "axios";
import { useLoaderData } from "react-router-dom"
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../context/context";
import useFetchData from "../utils/fetch";



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

// add recipe end point and logic for switch!!



// find a way to pass search term and category 
export const loader = (queryClient) => async ({ request }) => {



  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))



  const category = 'Cocktail'

  await queryClient.ensureQueryData(searchCocktailsCategoryQuery(category))




  return { searchTerm, category }

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

  // const { state } = useLocation()
  // const { category } = state
  // console.log(drinks);
  // console.log(filteredDrinks);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      {/* <CocktailList drinks={drinks} /> */}
      <CocktailList drinks={searchSwitch ? drinks : filteredDrinks} />
    </>
  )
}
export default Landing