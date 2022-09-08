import {useState, useEffect} from "react"
import axios from "axios"

const PokemonCard = ({pokemon}) => {
  const [currentPokemonUrl, setCurrentPokemonUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  )
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
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
  }else if(divByDash[1] === "z"){
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

  if (isLoading) return <h2>Loading...</h2>

  return (
    <div>
      <h3>{dispName}</h3>
    </div>
  )
}

export default PokemonCard
