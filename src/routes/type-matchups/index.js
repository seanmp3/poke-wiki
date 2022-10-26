import {useState, useEffect} from "react"

import {
  Main, 
  MatchupContainer, 
  TitleContainer, 
  SelectionsContainer, 
  SelectionContainer, 
  ResultContainer,
  ChartContainer
} from "./style"

import Arrow from "../../assets/Arrow"

import Dropdown from "../../components/Dropdown"

import typeMatchups from "../../data/TypeMatchups"
import Images from "../../data/Images"

const TypeMatchups = () => {
  const [moveType, setMoveType] = useState(0)
  const [targetMainType, setTargetMainType] = useState(0)
  const [targetSecondType, setTargetSecondType] = useState("none")
  const [effect, setEffect] = useState("Normally Effective")
  
  const MoveImg = Images[moveType]
  const TargetMainImg = Images[targetMainType]
  let TargetSecondImg 
  if(targetSecondType !== "none") TargetSecondImg = Images[targetSecondType]

  useEffect(() => {
    if(targetSecondType === "none"){
      if(typeMatchups[moveType].noEffect.includes(typeMatchups[targetMainType].type)){
        setEffect("No Effect")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type)){
        setEffect("Super Effective!")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type)){
        setEffect("Not Very Effective")
      }else{
        setEffect("Normally Effective")
      }
    }else{
      if(typeMatchups[moveType].noEffect.includes(typeMatchups[targetMainType].type) || typeMatchups[moveType].noEffect.includes(typeMatchups[targetSecondType].type)){
        setEffect("No Effect")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].strongTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Very Super Effective!")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].weakTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Barely Effective")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].weakTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Normally Effective")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type) && typeMatchups[moveType].strongTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Normally Effective")
      }else if(typeMatchups[moveType].strongTowards.includes(typeMatchups[targetMainType].type) || typeMatchups[moveType].strongTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Super Effective!")
      }else if(typeMatchups[moveType].weakTowards.includes(typeMatchups[targetMainType].type) || typeMatchups[moveType].weakTowards.includes(typeMatchups[targetSecondType].type)){
        setEffect("Not Very Effective")
      }else{
        setEffect("Normally Effective")
      }
    }
  }, [moveType, targetMainType, targetSecondType])

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
        <TitleContainer>
          <h1>Type Matchup Calculator</h1>
        </TitleContainer>
        <SelectionsContainer>
          <SelectionContainer>
            <h3>Move Type: {typeMatchups[moveType].type}</h3>
            <Dropdown
              type={moveType} 
              handleChange={handleChange} 
              purpose={"move"} 
              typeRef={null}
            />
          </SelectionContainer>
          <SelectionContainer>
          <h3>
            Target's Type
              {targetSecondType === "none" ? ": " : "s: "} 
              {typeMatchups[targetMainType].type}{" "}
              {targetSecondType !== "none" 
                && typeMatchups[targetSecondType].type}
            </h3>
            <div>
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
            </div>
          </SelectionContainer>
        </SelectionsContainer>
        <ResultContainer>
          <div>
            <MoveImg />
            <Arrow />
            <TargetMainImg />
            {targetSecondType !== "none" && <TargetSecondImg />}
          </div>
          <h3>{effect}</h3>
        </ResultContainer>
        <ChartContainer>
          <div>
            <h5>Multipliers</h5>
            <p>No Effect - 0x</p>
            <p>Barely Effective - 0.25x</p>
            <p>Not Very Effective - 0.5x</p>
            <p>Normally Effective - 1x</p>
            <p>Super Effective - 2x</p>
            <p>Very Super Effective - 4x</p>
          </div>
        </ChartContainer>
      </MatchupContainer>
    </Main>
  )
}

export default TypeMatchups
