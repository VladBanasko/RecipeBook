import axios from "axios";
import { useLoaderData, useLocation } from "react-router-dom"
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailCategorySearch = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'


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

// add recipe end point and logic for switch 


export const loader = (queryClient) => async ({ request }) => {

  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))

  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)

  return {
    // drinks: response.data.drinks,
    searchTerm
  }
}


const Landing = () => {

  const {
    // drinks,
    searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))

  // const { state } = useLocation()
  // const { category } = state
  // console.log(category);

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}
export default Landing