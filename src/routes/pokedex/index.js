import {useEffect, useState} from "react"
import axios from "axios"

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState(pokemon)

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => {
      setPokemon(res)
      console.log(pokemon)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <h2></h2>
  )
}

export default Pokedex
