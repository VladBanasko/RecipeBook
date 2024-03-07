import { useContext } from "react"
import { createContext, useState } from "react"


const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {

  const [databaseSwitch, setDatabaseSwitch] = useState(true)

  return (
    <GlobalContext.Provider value={{ databaseSwitch, setDatabaseSwitch }} >{children}</GlobalContext.Provider>
  )
}
export default AppContext