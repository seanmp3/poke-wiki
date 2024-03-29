import {useEffect, useState} from "react"
import axios from "axios"

import {Main, PokedexContainer, GenLabel, GenSelectors} from "./style"

import PokemonList from "../../components/PokemonList"

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([])
  const [currentGenUrl, setCurrentGenUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  )
  const [currentGenText, setCurrentGenText] = useState(
    "Kantonese Pokemon"
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

  return (
    <Main>
      <PokedexContainer>
        <GenLabel>{currentGenText}</GenLabel>
        <GenSelectors>
          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=151"
            )
            setCurrentGenText("Kantonese Pokemon")
          }}>1-<br/>151</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
            )
            setCurrentGenText("Johtonian Pokemon")
          }}>152-<br/>251</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
            )
            setCurrentGenText("Hoenn Pokemon")
          }}>252-<br/>386</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
            )
            setCurrentGenText("Sinnohian Pokemon")
          }}>387-<br/>493</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493"
            )
            setCurrentGenText("Unovan Pokemon")
          }}>494-<br/>649</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649"
            )
            setCurrentGenText("Kalosian Pokemon")
          }}>650-<br/>721</h4>
          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721"
            )
            setCurrentGenText("Alolan Pokemon")
          }}>722-<br/>809</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=89&offset=809"
            )
            setCurrentGenText("Galarian Pokemon")
          }}>810-<br/>898</h4>
        </GenSelectors>
        <PokemonList pokemon={pokemon} loading={isLoading} />
      </PokedexContainer>
    </Main>
  )
}

export default Pokedex
