
import { useLoaderData, Link } from "react-router-dom"
import axios from "axios"
import { Image } from "@nextui-org/react"


const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='


export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  return { id, data }
}

const Cocktail = () => {
  const { id, data } = useLoaderData()

  const singleDrink = data.drinks[0]
  const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions } = singleDrink

  return (
    <div className="min-h-screen grid-flow-row">
      <section className="">
        <Image src={image} className="w-full block object-cover"
        />
      </section>
      <section >
        <p>
          <span>name :{name}</span>
        </p>
        <p>
          <span>info :{info}</span>
        </p>
        <p>
          <span>category :{category}</span>
        </p>
        <p>
          <span>instructions :{instructions}</span>
        </p>
      </section>

    </div>
  )
}
export default Cocktail