import React, {useState, useEffect} from 'react'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import {furColors, eyeColors, earOptions, genderOptions} from "../../../myModelsConfig"
import history from '../../history'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import ErrorFill from '../ErrorFill'


//  /createKitten
const CreateKitten = () => {

  const defaultState = {
    name:'',
    breed: '',
    regNum: '',
    gender: genderOptions[0],
    ears: earOptions[0],
    furColor: furColors[0],
    eyeColor: eyeColors[0],
    mother: '',
    father:'',
    description: '',
    price: '',

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
    fetchEffect(
      [setDams, setError],
      'get',
      `api/mothers`
    )
    fetchEffect(
      [setStuds, setError],
      'get',
      `api/fathers`
      )
  }, [])

  useEffect(() => {
    posted && history.push(`/kittenDetailed/${posted.id}`, {kitten: posted, fromCreate: true})
  }, [posted])

  return (
    <>
      {error && <ErrorFill msg={error}/>}
      {/* <input type="file" name='mainImageSrcValue' placeholder='Main Picture' value={''} onChange={handleImage} /> <br /> */}
      {!error &&
        <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
          <h2>Kitten Creation Form</h2>
          <input type="text"
            name='name'
            placeholder='Name'
            value={kittenToCreate.name}
            onChange={handleChange}
          /> <br />
          <input
            type="text"
            name='breed'
            placeholder='Cat Breed'
            value={kittenToCreate.breed}
            onChange={handleChange}
          /> <br />
          <input
            type="text"
            name='regNum'
            placeholder='Registration Number'
            value={kittenToCreate.regNum}
            onChange={handleChange}
          /> <br />
          <select name="gender" value={kittenToCreate.gender} onChange={handleChange}>
            <option value={genderOptions[0]}>Boy or Girl</option>
              {genderOptions.map((ear, index) => (
                <option key={index} value={ear}>{ear}</option>
              ))}
          </select> <br />
          <select name="ears" value={kittenToCreate.ears} onChange={handleChange}>
            <option value={earOptions[0]}>Fold or Straight</option>
            {earOptions.map((ear, index) => (
              <option key={index} value={ear}>{ear}</option>
            ))}
          </select> <br />
          <select name="furColor" value={kittenToCreate.furColor} onChange={handleChange}>
            <option value={furColors[0]}>Fur Color</option>
            {furColors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select> <br />
          <select name="eyeColor" value={kittenToCreate.eyeColor} onChange={handleChange}>
          <option value={eyeColors[0]}>Eye Color</option>
            {eyeColors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select> <br />
          <select name="mother" value={kittenToCreate.mother} onChange={handleChange}>
            <option value="">Select Dam</option>
              {dams.map((dam, index) => (
                <option key={index} value={dam.name}>{dam.name}</option>
              ))}
          </select> <br />
          <select name="father" value={kittenToCreate.father} onChange={handleChange}>
            <option value="">Select Stud</option>
              {studs.map((stud, index) => (
                <option key={index} value={stud.name}>{stud.name}</option>
              ))}
          </select> <br />
          <input
            type="number"
            name='price'
            placeholder='price'
            value={kittenToCreate.price}
            onChange={handleChange}
          /> <br />
          <textarea name="description" cols="50" rows="8" placeholder='description'></textarea>
          <button type='submit'>Create</button>
        </form>
     }
    </>
  )


}

export default CreateKitten
