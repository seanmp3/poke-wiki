import {useState, useEffect} from "react"
import axios from "axios"

import {PokeCard, LoadContainer} from "./style"

const PokemonCard = ({pokemon}) => {
  const [currentPokemonUrl, setCurrentPokemonUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  )
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  //filtering exact pokemon display names
  let dispName
  const divByDash = pokemon.name.split("-")
  if(divByDash[0] === "mr"){
    dispName = divByDash[0].charAt(0).toUpperCase() 
    + divByDash[0].slice(1) + ". "
    + divByDash[1].charAt(0).toUpperCase() 
    + divByDash[1].slice(1)
  }else if(pokemon.name === "type-null"){
    dispName = divByDash[0].charAt(0).toUpperCase() 
    + divByDash[0].slice(1) + ": "
    + divByDash[1].charAt(0).toUpperCase() 
    + divByDash[1].slice(1)
  }else if(divByDash[1] === "o"){
    dispName = divByDash[0].charAt(0).toUpperCase() 
    + divByDash[0].slice(1) + "-" + divByDash[1]
  }else if(divByDash[1] === "z" || divByDash[0] === "nidoran"){
    dispName = divByDash[0].charAt(0).toUpperCase() 
    + divByDash[0].slice(1) + "-" + divByDash[1].toUpperCase()
  }else if(pokemon.name !== "ho-oh" && divByDash[0] !== "tapu"){
    dispName = divByDash[0].charAt(0).toUpperCase() 
    + divByDash[0].slice(1)
  }else{
    dispName = divByDash[0].charAt(0).toUpperCase() 
    + divByDash[0].slice(1) + "-" + 
    divByDash[1].charAt(0).toUpperCase() + divByDash[1].slice(1)
  }

  useEffect(() => {
    setIsLoading(true)
    let cancel
    axios.get(currentPokemonUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then((res) => {
      setIsLoading(false)
      setPokemonInfo(res.data)
    })
    .catch((err) => {
      switch(err.name){
        case "CanceledError":
          //console.log("Previous API call canceled")
          break
        default:
          console.log(err.message)
      }
    })

    return () => cancel()
  }, [currentPokemonUrl])

  if (isLoading) return <LoadContainer>Loading...</LoadContainer>

  return (
    <PokeCard>
      <h3>{pokemonInfo.id}</h3>
      <div>
        <img src={pokemonInfo.sprites.front_default} alt="pokemon"/>
      </div>
      <h3>{dispName}</h3>
      <span>
        {pokemonInfo.types.map(t => (
          <h3>{t.type.name}</h3>
        ))}
      </span>
      <span>
        {pokemonInfo.abilities.map(a => (
          <h3>{a.ability.name}</h3>
        ))}
      </span>
    </PokeCard>
  )
}

export default PokemonCard
