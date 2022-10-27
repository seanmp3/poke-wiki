import styled from "styled-components"
import {Link} from "react-router-dom"

export const NavContainer = styled.div`
  height: 8rem;
  display: flex;
  background: #B02624;
  border-bottom: 2px solid #000;
  margin: 1rem, 0;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: fixed;

  @media (max-width: 450px) {
    height: 12.5rem;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const HomeContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 450px) {
    order: -1;
    flex-basis: 100%;
    margin-top: .25rem;
  }
`

export const NavHomeLink = styled(Link)`
  border-radius: 50%;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;

  &:hover {
    background: #555;
  }

  &:active {
    background: #666;
  }
`

export const NavLinks = styled(Link)`
  border-radius: 50%;
  border: 2px solid #000;
  padding: 2vh;
  width: 8rem;
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
