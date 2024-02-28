import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Switch } from "@nextui-org/react";


import Food from '../assets/restaurant.svg?react'
import Drink from '../assets/cocktail.svg?react'

const NavbarTile = () => {
  return (
    <Navbar shouldHideOnScroll isBordered >
      <NavbarBrand >
        <p className="font-bold text-inherit max-w-fit">Recipe&DrinksBook</p>
      </NavbarBrand>

      {/* Switch to change search from Drinks and Food API */}
      <Switch
        defaultSelected
        size="lg"
        color="success"
        startContent={<Food />}
        endContent={<Drink />}
      >
        choose food or drink
      </Switch>


      <NavbarContent className="hidden sm:flex gap-4" justify='center'>
        <NavbarItem isActive>
          <Link href="/" aria-current="page" color="foreground">
            All
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" color="foreground">
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

    </Navbar>

  )
}
export default NavbarTile