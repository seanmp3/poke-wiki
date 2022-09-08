import {useEffect, useState} from "react"
import axios from "axios"

import PokemonList from "../../components/PokemonList"

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentGenUrl, setCurrentGenUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  )
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true)
    let cancel
    axios.get(currentGenUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then((res) => {
      setIsLoading(false)
      setPokemon(res.data.results.map(p => p))
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
  }, [currentGenUrl])

  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
      <span>
        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
          )
        }}>1-151</h4>

        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
          )
        }}>152-251</h4>

        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
          )
        }}>252-386</h4>

        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
          )
        }}>387-493</h4>

        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493"
          )
        }}>494-649</h4>

        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649"
          )
        }}>650-721</h4>
        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721"
          )
        }}>722-809</h4>

        <h4 onClick={(e) => {
          e.preventDefault()
          setCurrentGenUrl(
            "https://pokeapi.co/api/v2/pokemon?limit=96&offset=809"
          )
        }}>810-905</h4>
      </span>
      <PokemonList pokemon={pokemon} />
    </>
  )
}

export default Pokedex
