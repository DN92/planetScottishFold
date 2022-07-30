import React from 'react'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'
import { furColors, eyeColors, earOptions, genderOptions } from '../../myModelsConfig'

const KittenFilter = (props) => {

  const {gender, ears, eyeColor} = props.filterState

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, props.setter)
  }

  return (
    <>
      <form className='advSearch' >
        <h4>Advanced Search</h4>
        <label htmlFor="gender">Gender</label>
        <select name="gender" value={gender} onChange={handleChange} >
          {genderOptions.map((gen, index) => (
            <option key={index} value={gen}>{index === 0 ? `Boy or Girl` : gen }</option>
          ))}
        </select>
        <label htmlFor="ears">Ears: Fold or Straight</label>
        <select name="ears" value={ears} onChange={handleChange}>
          {earOptions.map((ear, index) => (
            <option key={index} value={ear}>{index === 0 ? `Fold or Straight` : ear }</option>
          ))}
        </select>
        <label htmlFor="eyeColor">Eye Color</label>
        <select name="eyeColor" value={eyeColor} onChange={handleChange}>
          {eyeColors.map((color, index) => {
            return <option key={index} value={color}>{index === 0 ? `Eye Color` : color}</option>
          }) }
        </select>
        <div className='advSearch__search'>
          <button className='buttonStyle2' type='button' onClick={props.searcher}>Search</button>
        </div>
      </form>
    </>
  )

}

export default KittenFilter
