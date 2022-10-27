import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 570px;
`

export const PokedexContainer = styled.section`
  background: #C7C7C7;
  border-radius: .5rem;
  min-height: 79vh;
  width: 90%;
  border: 1px solid #000;
  margin: 10rem 0 2rem;

  @media (max-width: 450px) {
    margin: 14.5rem 0 2rem;
    min-height: 71vh;
  }
`

export const GenLabel = styled.h2`
  text-align: center;
  margin: 1rem 0 .7rem;
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
    display: flex;
    flex-direction: row;
    padding: .3rem 0;

    br {
      display: none;
      @media (max-width: 680px) {
        display: inline;
      }
    }
  }
`
