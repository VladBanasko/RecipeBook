
import { useLoaderData, Link, Navigate } from "react-router-dom"
import axios from "axios"
import { Button, Image } from "@nextui-org/react"
import { useQuery } from "@tanstack/react-query"



const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    }
  }
}


export const loader = (queryClient) => async ({ params }) => {
  const { id } = params
  // const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  await queryClient.ensureQueryData(singleCocktailQuery(id))
  return {
    id,
    // data
  }
}

const Cocktail = () => {
  const { id,
    // data
  } = useLoaderData()
  const { data } = useQuery(singleCocktailQuery(id))

  if (!data) return <Navigate to='/' />


  const singleDrink = data.drinks[0]
  const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions } = singleDrink

  const validIngredients = Object.keys(singleDrink).filter((key) => key.startsWith('strIngredient') && singleDrink[key] !== null).map((key) => singleDrink[key])

  return (

    //  need to display content in two columns 
    <div className="min-h-screen columns-2">
      <div >
        <Image src={image} className="block object-cover"
        />
      </div>
      <h3 className="capitalize font-bold mb-4 text-center">{name}</h3>
      <div className="capitalize font-bold  leading-8"  >
        <p className="mb-2">
          <span className="mr-2 bg-violet-900 p-1 rounded tracking-wide">info :</span> {info}
        </p>
        <p className="mb-2">
          <span className="mr-2 bg-violet-900 p-1  rounded tracking-wide">category :</span> {category}
        </p>
        <p className="mb-2">
          <span className="mr-2 bg-violet-900 p-1  rounded tracking-wide">glass :</span> {glass}
        </p>
        <p className="mb-2">
          <span className="mr-2 bg-violet-900 p-1  rounded tracking-wide">ingredients :</span> {validIngredients.map((item, index) => {
            return <span key={item}>{item}{index < validIngredients.length - 1 ? ', ' : ''}</span>
          })}
        </p>
        <p >
          <span className="mr-2 bg-violet-900 p-1 rounded tracking-wide mt-2">instructions :</span> {instructions}
        </p>
      </div>
      <div className="text-center">
        <Link to='/' className="mt-4 inline-block capitalize cursor-pointer bg-violet-500 rounded-md px-3 py-1 tracking-wider shadow-sm" >back home</Link></div>

    </div>
  )
}
export default Cocktail