import {useState, useEffect} from "react"
import axios from "axios"

const PokemonCard = ({pokemon}) => {
  const [currentPokemonUrl, setCurrentPokemonUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  )
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
      <h3>{pokemon.name}</h3>
    </div>
  )
}

export default PokemonCard
