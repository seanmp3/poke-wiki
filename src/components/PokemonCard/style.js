import styled from "styled-components"

export const PokeCard = styled.div`
  display: grid;
  text-align: center;
  grid-auto-flows: row;
  grid-template-columns: 3fr 2fr 4fr 2fr 4fr;
  grid-template-rows: 6rem;

  img {
    max-width: 100%;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .gridItem {
    display: grid;
    align-items: center;
    justify-items: center;
  }
`

export const LoadContainer = styled.h2`
  text-align: center;
`
