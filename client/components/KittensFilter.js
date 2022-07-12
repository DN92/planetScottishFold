import React from 'react'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'
import { furColors, eyeColors } from '../../myModelsConfig'

const KittenFilter = (props) => {

  const {gender, ears, furColor, eyeColor, isAvailable} = props.filterState
  // const handleFilterBySearch = props.searcher

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, props.setter)
  }

  return (
    <form >
      <h4>Advanced Search</h4>
      <label htmlFor="gender">gender</label>
      <select name="gender" value={gender} onChange={handleChange} >
        <option value="any">No Pref</option>
        <option value="boy">Boy</option>
        <option value="girl">Girl</option>
      </select>
      <label htmlFor="ears">Ears: Fold or Straight</label>
      <select name="ears" value={ears} onChange={handleChange}>
        <option value="any">No Pref</option>
        <option value="fold">Fold</option>
        <option value="straight">Straight</option>
      </select>
      <label htmlFor="fuColor">Fur Color</label>
      <select name="furColor" value={furColor} onChange={handleChange}>
        <option value="any">No Pref</option>
        {furColors.map((color, index)=> {
          return <option key={index} value={color}>{color}</option>
        }) }
      </select>
      <label htmlFor="eyeColor">Eye Color</label>
      <select name="eyeColor" value={eyeColor} onChange={handleChange}>
        <option value="any">No Pref</option>
        {eyeColors.map((color, index) => {
          return <option key={index} value={color}>{color}</option>
        }) }
      </select>
      <label htmlFor="isAvailable">Availability</label>
      <select name="isAvailable" value={isAvailable} onChange={handleChange}>
        <option value={false}>Show All</option>
        <option value={true}>Available Only</option>
      </select>
      <button type='button' onClick={props.searcher}>Search</button>
      <hr />
    </form>

  )

}

export default KittenFilter
