import styled from "styled-components"

const PokemonCardLabels = () => {
  const PokeCard = styled.div`
    display: grid;
    text-align: center;
    border-radius: 2.5%;
    background: #999;
    grid-auto-flows: row;
    grid-template-columns: 3fr 2fr 4fr 2fr 4fr;
    grid-template-rows: 2rem;
    margin-bottom: 1rem;
  `

  return (
    <PokeCard>
      <h3>No.</h3>
      <h3>Pic.</h3>
      <h3>Name</h3>
      <h3>Types</h3>
      <h3>Abilities</h3>
    </PokeCard>
  )
}

export default PokemonCardLabels
