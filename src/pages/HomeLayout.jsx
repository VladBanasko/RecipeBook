import NavbarTile from "../components/NavbarTile"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div>
      <NavbarTile />
      <section className="w-11/12 m-0 py-20 px-8">
        <Outlet />
      </section>

    </div>)
}
export default HomeLayout