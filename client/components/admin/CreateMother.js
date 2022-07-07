import React, {useState} from 'react'
import axios from 'axios'
import defaultCatPictureSrc from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import {eyeColors} from "../../../myModelsConfig"
import history from "../../history"

const CreateMother = () => {

  const MOTHERorFATHER = history.location.state
  ? history.location.state.parent
  : 'mother'

  const defaultState = {
    name:'',
    serialNumber: '',
    dob: '',
    ears: '',
    furColor: '',
    eyeColor: '',
    age: null,
    image: defaultCatPictureSrc,
  }

  const [catToCreate, setCatToCreate] = useState(defaultState)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setCatToCreate)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const {data} = await axios.post(`/api/${MOTHERorFATHER}s`, catToCreate)
      ///
      history.push(`/${MOTHERorFATHER}Detailed`, {parent: MOTHERorFATHER, error: error,
      fromCreate: true})
      ///

      setError(null)

    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
      <h2>{`${MOTHERorFATHER}`} Creation Form</h2>
      <input type="text" name='name' placeholder='Name' value={catToCreate.name} onChange={handleChange} /> <br />
      <input type="text" name='serialNumber' placeholder='serial number' value={catToCreate.serialNumber} onChange={handleChange} /> <br />
      <input type="text" name='dob' placeholder='Date of Birth' value={catToCreate.dob} onChange={handleChange} /> <br />
      <select name="ears" value={catToCreate.ears} onChange={handleChange}>
        <option value="">Fold or Straight</option>
        <option value="fold">Fold</option>
        <option value="straight">Straight</option>
        <option value="noPref">No Preference</option>
      </select> <br />
      <input type="text" name='furColor' placeholder='Fur Color' value={catToCreate.furColor} onChange={handleChange} /> <br />
      <select name="eyeColor" value={catToCreate.eyeColor} onChange={handleChange}>
        <option value="">Eye Color</option>
        {eyeColors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
          ))}
      </select> <br />
      <button type='submit'>Create</button>
    </form>
  )
}

export default CreateMother
