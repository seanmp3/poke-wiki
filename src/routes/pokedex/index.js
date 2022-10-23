import {useEffect, useState} from "react"
import axios from "axios"
import styled from "styled-components"

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

  const Main = styled.main`
    display: flex;
    justify-content: center;
  `

  const PokedexContainer = styled.section`
    background: #C7C7C7;
    border-radius: .5rem;
    min-height: 79vh;
    width: 90%;
    border: 1px solid #000;
    margin-bottom: 2rem;
  `

  const GenLabel = styled.h2`
    text-align: center;
    margin: 1rem 0;
  `

  const GenSelectors = styled.span`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    text-align: center;
    margin: auto;
    margin-bottom: 1rem;

    h4 {
      cursor: pointer;
    }
  `

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
          }}>1-151</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
            )
            setCurrentGenText("Johtonian Pokemon")
          }}>152-251</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"
            )
            setCurrentGenText("Hoenn Pokemon")
          }}>252-386</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"
            )
            setCurrentGenText("Sinnohian Pokemon")
          }}>387-493</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493"
            )
            setCurrentGenText("Unovan Pokemon")
          }}>494-649</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649"
            )
            setCurrentGenText("Kalosian Pokemon")
          }}>650-721</h4>
          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721"
            )
            setCurrentGenText("Alolan Pokemon")
          }}>722-809</h4>

          <h4 onClick={(e) => {
            e.preventDefault()
            setCurrentGenUrl(
              "https://pokeapi.co/api/v2/pokemon?limit=89&offset=809"
            )
            setCurrentGenText("Galarian Pokemon")
          }}>810-898</h4>
        </GenSelectors>
        <PokemonList pokemon={pokemon} loading={isLoading}/>
      </PokedexContainer>
    </Main>
  )
}

export default Pokedex
