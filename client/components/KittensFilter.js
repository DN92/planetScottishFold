import React from 'react'
import { eyeColors, earOptions, genderOptions } from '../../myModelsConfig'

const KittenFilter = ({filterState, dispatch, searcher}) => {

  const gender = filterState.gender.selection
  const ears = filterState.ears.selection
  const eyeColor =filterState.eyeColor.selection

  const handleChange = (event) => {
    dispatch({
      type: 'set',
      field: event.target.name,
      value: event.target.value,
    })
  }

  return (
    <form className='advSearch' >
      <h4>Sort Kittens</h4>
      <>
        <select name="gender" value={gender} onChange={handleChange} >
          {genderOptions.map((gen, index) => (
            <option key={index} value={gen}>{index === 0 ? `Boy or Girl` : gen }</option>
            ))}
        </select>
        <label htmlFor="gender">Gender</label><br />
      </>
      <>
        <select name="ears" value={ears} onChange={handleChange}>
          {earOptions.map((ear, index) => (
            <option key={index} value={ear}>{index === 0 ? `Fold or Straight` : ear }</option>
            ))}
        </select>
        <label htmlFor="ears">Ears</label><br />
      </>
      <>
        <select name="eyeColor" value={eyeColor} onChange={handleChange}>
          {eyeColors.map((color, index) => {
            return <option key={index} value={color}>{index === 0 ? `Eye Color` : color}</option>
          }) }
        </select>
        <label htmlFor="eyeColor">Eye Color</label><br />
      </>
      <div className='advSearch__search'>
        <button className='buttonStyle2' type='button' onClick={searcher}>Sort</button>
      </div>
    </form>
  )
}

export default KittenFilter
