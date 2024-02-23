import CardTile from "./CardTile"

const CardList = ({ list }) => {
  return (
    <section >
      {
        list.map((item) => {
          const { name } = item
          return <CardTile title={name} />
        })
      }
    </section>)
}
export default CardList