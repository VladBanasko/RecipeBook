import { Button, Card, CardBody, CardHeader, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { nanoid } from "nanoid"
import { useState } from "react";

const FoodList = ({ food }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [foodMeal, setFoodMeal] = useState({})

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 ">
      {food.map((item) => {
        return <Card isPressable onPress={() => {
          onOpen(), setFoodMeal(item)

        }}
          className=" border-none " key={nanoid()}>
          <CardHeader className="justify-center">
            <p className="uppercase font-bold">{item.title}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-center">{item.servings}</p>
          </CardBody>
        </Card>

      })}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{

        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
      }}>

        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{foodMeal.title}</ModalHeader>
              <ModalBody>
                <p>
                  {foodMeal.ingredients}
                </p>
                <Divider />
                <p>
                  {foodMeal.instructions}
                </p>

              </ModalBody>
              <ModalFooter>
                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  Close
                </Button>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
export default FoodList