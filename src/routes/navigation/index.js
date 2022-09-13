import {Outlet, Link} from "react-router-dom"
import styled from "styled-components"

import Logo from "../../assets/Logo.js"

const NavContainer = styled.div`
  height: 8rem;
  display: flex;
  background: #B02624;
  border-bottom: 1px solid #000;
  margin: 1rem, 0;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: fixed;
`

const NavBackdrop = styled.div`
  height: 8rem;
`

const NavHomeLink = styled(Link)`
  border-radius: 50%;
  border: 2px solid #000;

  &:hover {
    background: #555;
  }

  &:active {
    background: #666;
  }
`

const NavLinks = styled(Link)`
  border-radius: 50%;
  border: 2px solid #000;
  padding: 2vh;
  width: 7rem;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: #555;
  }

  &:active {
    background: #666;
  }

  h3 {
    color: #000;
  }
`

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
      <NavBackdrop/>
      <Outlet />
    </>
  )
}

export default Navigation
