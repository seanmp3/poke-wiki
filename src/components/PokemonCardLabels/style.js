import styled from "styled-components"

export const PokeCard = styled.div`
  display: grid;
  text-align: center;
  border-radius: 2.5%;
  background: #999;
  grid-auto-flows: row;
  grid-template-columns: 3fr 2fr 4fr 2fr 4fr;
  grid-template-rows: 2rem;
  margin-bottom: .3rem;

  h3 {
    display: grid;
    align-items: center;
    justify-items: center;
  }
`
