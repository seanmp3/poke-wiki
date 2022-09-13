import styled from "styled-components"

import PokemonCard from "../PokemonCard"
import PokemonCardLabels from "../PokemonCardLabels"

const PokeList = styled.div`
  display: grid;
  width: 90%;
  margin: auto;
`

const PokemonList = ({pokemon}) => {
  return (
    <PokeList>
      <PokemonCardLabels/>
      {pokemon.map(p => (
        <PokemonCard key={p.name} pokemon={p}/>
      ))}
    </PokeList>
  )
}

export default PokemonList
