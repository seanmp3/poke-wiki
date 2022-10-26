import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  justify-content: center;
`

export const PokedexContainer = styled.section`
  background: #C7C7C7;
  border-radius: .5rem;
  min-height: 79vh;
  width: 90%;
  border: 1px solid #000;
  margin: 10rem 0 2rem;
`

export const GenLabel = styled.h2`
  text-align: center;
  margin: 1rem 0;
`

export const GenSelectors = styled.span`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  text-align: center;
  margin: auto;
  margin-bottom: 1rem;

  h4 {
    cursor: pointer;
  }
`
