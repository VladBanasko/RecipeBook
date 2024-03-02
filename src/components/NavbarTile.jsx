import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Switch, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";


import Food from '../assets/restaurant.svg?react'
import Drink from '../assets/cocktail.svg?react'


import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "../assets/Icons";

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
  scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  lock: <Lock className="text-success" fill="currentColor" size={30} />,
  activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  server: <Server className="text-success" fill="currentColor" size={30} />,
  user: <TagUser className="text-danger" fill="currentColor" size={30} />,
};



const NavbarTile = () => {
  return (
    <Navbar shouldHideOnScroll isBordered >
      <NavbarBrand >
        <p className="font-bold text-inherit max-w-fit">Recipe&DrinksBook</p>
      </NavbarBrand>

      {/* Switch to change search from Drinks and Food API */}
      <NavbarContent className="justify-center capitalize">
        <Switch
          defaultSelected
          size="lg"
          color="success"
          startContent={<Food />}
          endContent={<Drink />}
        >
          choose food or drink
        </Switch></NavbarContent>


      {/* add categories of drinks  */}

      <NavbarContent className="hidden sm:flex gap-4" justify='center'>
        <NavbarItem isActive>
          <Link href="/" aria-current="page" color="foreground">
            All
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Categories
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="Cocktail"
                description="Cocktail drinks"
                startContent={icons.scale}
              >
                Cocktails
              </DropdownItem>
              <DropdownItem
                key="ordinary"
                description="Ordinary drinks"
                startContent={icons.activity}
              >
                Ordinary drink
              </DropdownItem>
              <DropdownItem
                key="Shots"
                description="Shots"
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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