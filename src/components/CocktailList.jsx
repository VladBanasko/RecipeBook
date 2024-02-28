import CocktailCard from "./CocktailCard"



const CocktailList = ({ drinks }) => {

  if (!drinks) {
    return <h4 className="text-center"> no matching drinks</h4>
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

    return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 justify-evenly justify-items-center content-evenly">
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </div>
  )
}
export default CocktailList