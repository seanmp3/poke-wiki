import React from "react"

import typeMatchups from "../../data/TypeMatchups"

const Dropdown = ({type, handleChange, purpose, typeRef}) => {
  return (
    <select
      value={type}
      onChange={e => {
        const selectedType = e.target.value
        handleChange(purpose, selectedType)
      }}
    >
      {purpose === "second" && <option value="none">None</option>}
      {typeMatchups.filter(type => type.type !== typeRef).map(filteredType => (
        <option value={filteredType.id}>{filteredType.type}</option>
      ))}
      {/*
      <option value="0">Normal</option>
      <option value="1">Fire</option>
      <option value="2">Water</option>
      <option value="3">Electric</option>
      <option value="4">Grass</option>
      <option value="5">Ice</option>
      <option value="6">Fighting</option>
      <option value="7">Poison</option>
      <option value="8">Ground</option>
      <option value="9">Flying</option>
      <option value="10">Psychic</option>
      <option value="11">Bug</option>
      <option value="12">Rock</option>
      <option value="13">Ghost</option>
      <option value="14">Dragon</option>
      <option value="15">Dark</option>
      <option value="16">Steel</option>
      <option value="17">Fairy</option>*/}
    </select>
  )
}

export default Dropdown
