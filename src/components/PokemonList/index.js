import PokemonCard from "../PokemonCard"

const PokemonList = ({pokemon}) => {
  return (
    <div> 
      {pokemon.map(p => (
        <PokemonCard key={p.name} pokemon={p}/>
      ))}
    </div>
  )
}

export default PokemonList
