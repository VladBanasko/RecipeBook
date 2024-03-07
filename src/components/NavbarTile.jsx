import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Switch, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import Food from '../assets/restaurant.svg?react'
import Drink from '../assets/cocktail.svg?react'


import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "../assets/Icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
  scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  lock: <Lock className="text-success" fill="currentColor" size={30} />,
  activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  server: <Server className="text-success" fill="currentColor" size={30} />,
  user: <TagUser className="text-danger" fill="currentColor" size={30} />,
};

export

  // const navigate = useNavigate()

  const categorySelection = (category) => {

    // <Navigate to={'/Landing'} category={category} />
    // navigate('/Landing', { state: { category } })
    console.log(category);

    // implement navigate or fetch data according to chosen category 



  }


const NavbarTile = () => {

  const { databaseSwitch, setDatabaseSwitch } = useGlobalContext()
  return (
    <Navbar shouldHideOnScroll isBordered >
      <NavbarBrand >
        <Link href="/" className="text-slate-100">
          <p className="font-bold text-inherit max-w-fit">Recipe&DrinksBook</p>
        </Link>
      </NavbarBrand>

      {/* Switch to change search from Drinks and Food API */}
      <NavbarContent className="justify-center capitalize">
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          startContent={<Drink />}
          endContent={<Food />}
          className=""
          onChange={(event) => setDatabaseSwitch(event.target.checked)}
        >
          drink or food
        </Switch>
      </NavbarContent>


      {/* add categories of drinks  */}

      <NavbarContent className="hidden sm:flex gap-4" justify='center'>
        <NavbarItem isActive>
          <Link href="/" aria-current="page" color="foreground">
            All
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Dropdown >
            {databaseSwitch ?
              <DropdownTrigger >
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Categories
                </Button>
              </DropdownTrigger> :
              <DropdownTrigger isDisabled>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Categories
                </Button>
              </DropdownTrigger>}

            {/* </NavbarItem> */}
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}

              onAction={(key) => categorySelection(key)}
            >
              <DropdownItem
                key="Cocktails"
                description="Cocktails drinks"
                startContent={icons.scale}
              >
                Cocktails
              </DropdownItem>
              <DropdownItem
                key="Ordinary drinks"
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
                Shots
              </DropdownItem>
              <DropdownItem
                key="Punch / Party drinks"
                description="Punch / Party drinks"
                startContent={icons.server}
              >
                Punch / Party Drinks
              </DropdownItem>
              <DropdownItem
                key="Coffee / Tea"
                description="Coffee / Tea"
                startContent={icons.user}
              >
                Coffee / Tea
              </DropdownItem>
              <DropdownItem
                key="Beer"
                description="Beer"
                startContent={icons.user}
              >
                Beer
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

    </Navbar >

  )
}
export default NavbarTile