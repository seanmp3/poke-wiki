import {Outlet} from "react-router-dom"

import {NavContainer, HomeContainer, NavHomeLink, NavLinks} from "./style"

import Logo from "../../assets/Logo.js"

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <NavLinks to="/pokedex">
          <h3>Regional Pokedexes<br/></h3>
        </NavLinks>
        <HomeContainer>
          <NavHomeLink to="/">
            <div>
              <Logo/>
            </div>
          </NavHomeLink>
        </HomeContainer>
        <NavLinks to="/type-matchups">
          <h3>Type Matchups</h3>
        </NavLinks>
      </NavContainer>
      <Outlet />
    </>
  )
}

export default Navigation
