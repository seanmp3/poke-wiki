import {PokeList, LoadingContainer} from "./style"

import PokemonCard from "../PokemonCard"
import PokemonCardLabels from "../PokemonCardLabels"

const PokemonList = ({pokemon, loading}) => {
  if (loading) return <LoadingContainer>Loading...</LoadingContainer>
  return (
    <PokeList>
      <PokemonCardLabels />
      {pokemon.map(p => (
        <PokemonCard key={p.name} pokemon={p}/>
      ))}
    </PokeList>
  )
}

export default PokemonList
