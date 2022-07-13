import React from 'react'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'
import { furColors, eyeColors, earOptions, genderOptions } from '../../myModelsConfig'

const KittenFilter = (props) => {

  const {gender, ears, furColor, eyeColor, isAvailable} = props.filterState
  // const handleFilterBySearch = props.searcher

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, props.setter)
  }

  return (
    <form >
      <h4>Advanced Search</h4>
      <label htmlFor="gender">Gender</label>
      <select name="gender" value={gender} onChange={handleChange} >
        <option value={genderOptions[0]}>Boy or Girl</option>
        {genderOptions.map((gen, index) => (
          <option key={index} value={gen}>{gen}</option>
        ))}
      </select>
      <label htmlFor="ears">Ears: Fold or Straight</label>
      <select name="ears" value={ears} onChange={handleChange}>
        <option value={earOptions[0]}>Fold Or Straight</option>
        {earOptions.map((ear, index) => (
          <option key={index} value={ear}>{ear}</option>
        ))}
      </select>
      <label htmlFor="fuColor">Fur Color</label>
      <select name="furColor" value={furColor} onChange={handleChange}>
        <option value={furColors[0]}>Fur Color</option>
        {furColors.map((color, index)=> (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
      <label htmlFor="eyeColor">Eye Color</label>
      <select name="eyeColor" value={eyeColor} onChange={handleChange}>
        <option value={eyeColors[0]}>Eye Color</option>
        {eyeColors.map((color, index) => {
          return <option key={index} value={color}>{color}</option>
        }) }
      </select>
      <button type='button' onClick={props.searcher}>Search</button>
      <hr />
    </form>

  )

}

export default KittenFilter
