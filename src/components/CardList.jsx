import { nanoid } from "nanoid"
import CardTile from "./CardTile"

const CardList = ({ list }) => {
  return (
    <section className="flex gap-3 justify-around" >
      {
        list.map((item) => {
          console.log(item)
          const { title, ingredients, instructions, servings } = item
          return <CardTile key={nanoid()} title={title} ingredients={ingredients} instructions={instructions} servings={servings} />
        })
      }
    </section>)
}
export default CardList