import {useState, useEffect} from "react"
import styled from "styled-components"

import Dropdown from "../../components/Dropdown"

import typeMatchups from "../../data/TypeMatchups"
import Image from "../../assets/icons/water.js"

const TypeMatchups = () => {
  const [moveType, setMoveType] = useState(0)
  const [targetMainType, setTargetMainType] = useState(0)
  const [targetSecondType, setTargetSecondType] = useState("none")
  const [effect, setEffect] = useState("Normally Effective")

  useEffect(() => {
    if(targetSecondType === "none"){
      if(typeMatchups[moveType].noEffect.includes(typeMatchups[targetMainType].type)){
        setEffect("No Effect")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type)){
        setEffect("Super Effective")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type)){
        setEffect("Not Very Effective")
      }else{
        setEffect("Normally Effective")
      }
    }else{
      if(typeMatchups[moveType].noEffect.includes(typeMatchups[targetMainType].type) || typeMatchups[moveType].noEffect.includes(typeMatchups[targetSecondType].type)){
        setEffect("No Effect")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].strongTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Very Super Effective")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].weakTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Barely Effective")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].weakTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Normally Effective")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].strongTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Normally Effective")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type) || typeMatchups[moveType].strongTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Super Effective")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type) || typeMatchups[moveType].weakTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Not Very Effective")
      }else{
        setEffect("Normally Effective")
      }
    }
  }, [moveType, targetMainType, targetSecondType])

  const Main = styled.main`
    display: flex;
    justify-content: center;
  `

  const MatchupContainer = styled.section`
    background: #C7C7C7;
    border-radius: .5rem;
    min-height: 79vh;
    width: 90%;
    border: 1px solid #000;
  `

  const handleChange = (state, value) => {
    switch (state){
      case "move":
        setMoveType(value)
        break
      case "main":
        setTargetMainType(value)
        break
      case "second":
        setTargetSecondType(value)
        break
      default:
        console.log("error")
    }
  }

  let mainRef
  targetSecondType === "none" 
    ? mainRef = null 
    : mainRef = typeMatchups[targetSecondType].type
        

  return (
    <Main>
      <MatchupContainer>
        <h1>Move Type: {typeMatchups[moveType].type}</h1>
        <h1>Target's Type{targetSecondType === "none" ? ":" : "s:"} {typeMatchups[targetMainType].type} {targetSecondType !== "none" && typeMatchups[targetSecondType].type}</h1>
        <h1>{effect}</h1>
        <Dropdown 
          type={moveType} 
          handleChange={handleChange} 
          purpose={"move"} 
          typeRef={null}
        />
        <Dropdown 
          type={targetMainType} 
          handleChange={handleChange} 
          purpose={"main"} 
          typeRef={mainRef}
        />
        <Dropdown 
          type={targetSecondType} 
          handleChange={handleChange} 
          purpose={"second"} 
          typeRef={typeMatchups[targetMainType].type}
        />
      </MatchupContainer>
    </Main>
  )
}

export default TypeMatchups
