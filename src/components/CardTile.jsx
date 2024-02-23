import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import im from '../assets/img1.jpg'

const CardTile = ({ title }) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-64">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={im}
        width={270}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{title}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  )
}
export default CardTile