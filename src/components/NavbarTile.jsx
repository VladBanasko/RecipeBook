import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const NavbarTile = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>

        <p className="font-bold text-inherit">RecipeBook</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            All
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground">
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>

  )
}
export default NavbarTile