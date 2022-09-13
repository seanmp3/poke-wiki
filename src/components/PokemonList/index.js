import styled from "styled-components"

import PokemonCard from "../PokemonCard"

const PokeList = styled.div`
  display: grid;
  width: 90%;
  margin: auto;
`

const PokemonList = ({pokemon}) => {
  return (
    <PokeList>
      {pokemon.map(p => (
        <PokemonCard key={p.name} pokemon={p}/>
      ))}
    </PokeList>
  )
}

export default PokemonList
