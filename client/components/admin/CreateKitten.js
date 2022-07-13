import React, {useState, useEffect} from 'react'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import {furColors, eyeColors} from "../../../myModelsConfig"
import history from '../../history'
import { fetchEffect } from '../axiosHandlers/fetchEffect'


//  /createKitten
const CreateKitten = () => {

  const defaultState = {
    name:'',
    serialNumber: '',
    gender: '',
    ears: '',
    furColor: '',
    eyeColor: '',
    mother: '',
    father:'',
    description: '',
    price: 0,
    regNum: '',

  }

  const [kittenToCreate, setKittenToCreate] = useState(defaultState)
  const [dams, setDams] = useState([])
  const [studs, setStuds] = useState([])
  const [posted, setPosted] = useState(null)
  const [error, setError] = useState(null)


  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setKittenToCreate)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  // const handleImage = (event) => {
    //   console.log(event)

    //   return
    // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    fetchEffect(
      [setPosted, setError],
      'post',
      `/api/kittens`,
      kittenToCreate
    )
  }

  useEffect(() => {
    history.push(`/kittenDetailed/${posted.id}`, {kitten: posted, fromCreate: true})
  }, [posted])

  useEffect(() => {
      fetchEffect(
        [setDams, setError],
        'get',
        `api/mothers`
      )
      fetchEffect(
        [setStuds, setError],
        'get',
        `api/mothers`
      )
  }, [])

  return (
    <div>
      {/* <input type="file" name='mainImageSrcValue' placeholder='Main Picture' value={''} onChange={handleImage} /> <br /> */}
      <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
        <h2>Kitten Creation Form</h2>
        <input type="text" name='name' placeholder='Name' value={kittenToCreate.name} onChange={handleChange} /> <br />
        <select name="gender" value={kittenToCreate.gender} onChange={handleChange}>
          <option value="">Boy or Girl?</option>
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
        </select> <br />
        <select name="ears" value={kittenToCreate.ears} onChange={handleChange}>
          <option value="">Fold or Straight</option>
          <option value="fold">Fold</option>
          <option value="straight">Straight</option>
        </select> <br />
        <select name="furColor" value={kittenToCreate.furColor} onChange={handleChange}>
          <option value="">Fur Color</option>
          {furColors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select> <br />
        <select name="eyeColor" value={kittenToCreate.eyeColor} onChange={handleChange}>
        <option value="">Eye Color</option>
          {eyeColors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select> <br />
        <select name="mother" value={kittenToCreate.mother} onChange={handleChange}>
          <option value="">Select Dam</option>
            {dams.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
        </select> <br />
        <select name="father" value={kittenToCreate.father} onChange={handleChange}>
          <option value="">Select Stud</option>
            {studs.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
        </select> <br />
        <input
              type="number"
              name='price'
              placeholder='price'
              value={kittenToCreate.price}
              onChange={handleChange} /> <br />
        <input
              type="text"
              name='regNum'
              placeholder='Registration Number'
              value={kittenToCreate.regNum}
              onChange={handleChange} /> <br />
        <textarea name="description" cols="50" rows="15" placeholder='description'></textarea>
        <button type='submit'>Create</button>

      </form>

    </div>
  )


}

export default CreateKitten
