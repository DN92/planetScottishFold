import React, {useState, useEffect} from 'react'
import {eyeColors} from "../../../myModelsConfig"
import history from "../../history"
import { useParams } from 'react-router-dom'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import { fetchEffect } from '../axiosHandlers/fetchEffect'

const CreateCat = () => {

  const {MOTHERorFATHER} = useParams()

  const defaultState = {
    name:'',
    serialNumber: '',
    dob: '',
    ears: '',
    furColor: '',
    eyeColor: '',
    description: '',
  }

  const [catToCreate, setCatToCreate] = useState(defaultState)
  const [posted, setPosted] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setCatToCreate)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
      fetchEffect(
        [setPosted, setError],
        'post',
        `/api/${MOTHERorFATHER}s`,
        catToCreate
      )
  }

  useEffect(() => {
    posted && history.push(`/catDetailedView/${MOTHERorFATHER}/${posted.id}`, {cat: posted, error: error, fromCreate: true})
  }, [posted])

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
      <textarea name="description" cols="50" rows="15" placeholder='description'></textarea>
      <button type='submit'>Create</button>
    </form>
  )
}

export default CreateCat
