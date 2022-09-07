import {Outlet, Link} from "react-router-dom"

import styled from "styled-components"

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <NavHomeLink to="/">
          <h1>Poketch App</h1>
        </NavHomeLink>
        <NavAppsContainer>
          <NavLinks to="/pokedex">
            <h3>Pokedex</h3>
          </NavLinks>
          <NavLinks to="/type-matchups">
            <h3>Type Matchups</h3>
          </NavLinks>
          <NavLinks to="/team-builder">
            <h3>Team Builder</h3>
          </NavLinks>
        </NavAppsContainer>
      </NavContainer>
      <Outlet />
    </>
  )
}

const NavContainer = styled.div`

`

const NavAppsContainer = styled.div`

`

const NavHomeLink = styled(Link)`

`

const NavLinks = styled(Link)`

`

export default Navigation
