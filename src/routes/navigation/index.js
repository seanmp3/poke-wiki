import {Outlet} from "react-router-dom"

import {NavContainer, NavHomeLink, NavLinks} from "./style"

import Logo from "../../assets/Logo.js"

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <NavLinks to="/pokedex">
          <h3>Pokedex</h3>
        </NavLinks>
        <NavHomeLink to="/">
          <Logo/>
        </NavHomeLink>
        <NavLinks to="/type-matchups">
          <h3>Type Matchups</h3>
        </NavLinks>
      </NavContainer>
      <Outlet />
    </>
  )
}

export default Navigation
