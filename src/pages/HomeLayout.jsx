import NavbarTile from "../components/NavbarTile"
import { Outlet, useNavigation } from "react-router-dom"



const HomeLayout = () => {

  const navigation = useNavigation()

  const isPageLoading = navigation.state === 'loading'
  // const isPageLoading = 'true'

  const value = 'some value'

  return (
    <div>
      <NavbarTile />
      <section className=" m-0 py-10 px-8 min-h-screen">
        {isPageLoading ?
          <div className="flex justify-center">
            <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600">

            </div>
          </div>

          : <Outlet context={{ value }} />}

      </section>

    </div>)
}
export default HomeLayout