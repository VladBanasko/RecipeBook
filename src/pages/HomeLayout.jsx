import NavbarTile from "../components/NavbarTile"
import { Outlet, useNavigation } from "react-router-dom"



const HomeLayout = () => {

  const navigation = useNavigation()

  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <NavbarTile />
      <section className=" m-0 py-20 px-8">
        {isPageLoading ?
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>

          : <Outlet />}

      </section>

    </div>)
}
export default HomeLayout