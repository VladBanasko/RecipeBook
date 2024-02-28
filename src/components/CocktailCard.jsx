import { Card, CardFooter, Image } from "@nextui-org/react"
import { Link } from "react-router-dom"

const CocktailCard = ({ image, id, name, info, glass }) => {

  return (
    <Card isFooterBlurred
      radius="lg"
      className="border-none ">
      <Image className="object-cover rounded-xl" src={image} alt={name} isZoomed width={240} />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <h4 className="font-bold">{name}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>Details</Link>
      </CardFooter>
    </Card>
  )
}
export default CocktailCard