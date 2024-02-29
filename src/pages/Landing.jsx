import axios from "axios";
import { useLoaderData } from "react-router-dom"
import CocktailList from "../components/CocktailList";

const cocktailCategorySearch = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'


const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = ''
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  const cat = response.data.drinks.map((item) => {
    return item.strCategory
  })

  const categ = new Set(cat)
  console.log(response.data.drinks);
  console.log(categ);

  return { drinks: response.data.drinks, searchTerm }
}


const Landing = () => {


  const { drinks, searchTerm } = useLoaderData()


  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  )
}
export default Landing