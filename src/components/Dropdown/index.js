import React from "react"

import {Select} from "./style"

import typeMatchups from "../../data/TypeMatchups"

const Dropdown = ({type, handleChange, purpose, typeRef}) => {
  return (
    <Select
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
    </Select>
  )
}

export default Dropdown
