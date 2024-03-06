import { Button, Input } from "@nextui-org/react"
import { Form, useNavigation } from "react-router-dom"

const SearchForm = ({ searchTerm }) => {

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'


  return (
    <div className="flex justify-center mb-4">
      <Form className="flex w-1/2 flex-wrap justify-center md:flex-nowrap gap-4 mb-4">
        <Input type="search" name="search" placeholder="Type to search" defaultValue={searchTerm} />
        <Button type="submit" disabled={isSubmitting} className="mt-2">{isSubmitting ? 'Searching' : 'Search'}</Button>
      </Form>
    </div>

  )
}
export default SearchForm