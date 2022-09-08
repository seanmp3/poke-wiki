import {Outlet, Link} from "react-router-dom"

import styled from "styled-components"

const NavContainer = styled.div`
  height: 4rem;
  display: flex;
  background: #B02624;
  margin: 1rem, 10rem;
`

const NavAppsContainer = styled.div`
  background: #B02624;
`

const NavHomeLink = styled(Link)`
  background: #B02624;
`

const NavLinks = styled(Link)`
  background: #B02624;
`

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

export default Navigation
