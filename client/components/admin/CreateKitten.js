import React, {useState, useEffect} from 'react'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import {furColorsAdmin, eyeColorsAdmin, earOptions, genderOptions} from "../../../myModelsConfig"
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import ErrorFill from '../ErrorFill'
import useNameGenerator from '../../customHooks/useNameGenerator'
import { useNavigate } from 'react-router-dom'


//  /createKitten
const CreateKitten = () => {

  const navigate = useNavigate()
  const defaultState = {
    name:'',
    breed: '',
    regNum: '',
    gender: genderOptions[0],
    ears: earOptions[0],
    furColor: furColorsAdmin[0],
    eyeColor: eyeColorsAdmin[0],
    mother: '',
    father:'',
    description: '',
    price: '',
    location: '',
  }

  const [kittenToCreate, setKittenToCreate] = useState(defaultState)
  const [dams, setDams] = useState([])
  const [studs, setStuds] = useState([])
  const [posted, setPosted] = useState(null)
  const [error, setError] = useState(null)
  const [randomName, getNewRandomName] = useNameGenerator()


  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setKittenToCreate)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    fetchEffect(
      [setPosted, setError],
      'post',
      `/api/kittens`,
      kittenToCreate
    )
  }

  const handleRandomName = () => {
    getNewRandomName();
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
    posted && navigate(`/kittenDetailed/${posted.id}`, {state:{kitten: posted, fromCreate: true}})
  }, [posted])

  useEffect(() =>{
    if (randomName) {
      setKittenToCreate(prev => ({...prev, name: randomName}))
    }
  }, [randomName])

  return (
    <>
      {error && <ErrorFill msg={error}/>}
      {/* <input type="file" name='mainImageSrcValue' placeholder='Main Picture' value={''} onChange={handleImage} /> <br /> */}
      {!error &&
        <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
          <h2>Kitten Creation Form</h2>
          <>
            <label htmlFor="kittenToCreateName">Name</label>
            <input id="kittenToCreateName"
             type="text"
              name='name'
              placeholder='Name'
              value={kittenToCreate.name}
              onChange={handleChange}
            /> <br />
            <button type='button' onClick={handleRandomName}>Randomize Name</button>
          </>
          <>
            <label htmlFor="kittenToCreateBreed">Breed</label>
            <input id = "kittenToCreateBreed"
              type="text"
              name='breed'
              placeholder='Cat Breed'
              value={kittenToCreate.breed}
              onChange={handleChange}
            /> <br />
          </>
          <>
            <label htmlFor="kittenToCreateRegNum">Registration#</label>
            <input id="kittenToCreateRegNum"
              type="text"
              name='regNum'
              placeholder='Registration Number'
              value={kittenToCreate.regNum}
              onChange={handleChange}
            /> <br />
          </>
          <>
            <label htmlFor="kittenToCreateGender">Gender</label>
            <select id="kittenToCreateGender"
              name="gender"
              value={kittenToCreate.gender}
              onChange={handleChange}
            >
              <option value={genderOptions[0]}>Boy or Girl</option>
                {genderOptions.map((ear, index) => (
                  <option key={index} value={ear}>{ear}</option>
                ))}
            </select> <br />
          </>
          <>
            <label htmlFor="kittenToCreateEars">Ears</label>
            <select id="kittenToCreateEars" name="ears" value={kittenToCreate.ears} onChange={handleChange}>
              <option value={earOptions[0]}>Fold or Straight</option>
              {earOptions.map((ear, index) => (
                <option key={index} value={ear}>{ear}</option>
              ))}
            </select> <br />
          </>
          <>
            <label htmlFor="kittenToCreateFur">Fur Color</label>
            <select id="kittenToCreateFur" name="furColor" value={kittenToCreate.furColor} onChange={handleChange}>
              <option value={furColorsAdmin[0]}>Fur Color</option>
              {furColorsAdmin.map((color, index) => (
                <option key={index} value={color}>{color}</option>
              ))}
            </select> <br />
          </>
          <>
            <label htmlFor="kittenToCreateEyes">Eye Color</label>
            <select id="kittenToCreateEyes" name="eyeColor" value={kittenToCreate.eyeColor} onChange={handleChange}>
            <option value={eyeColorsAdmin[0]}>Eye Color</option>
              {eyeColorsAdmin.map((color, index) => (
                <option key={index} value={color}>{color}</option>
              ))}
            </select> <br />
          </>
          <>
            <label htmlFor="kittenToCreateMother">Mother</label>
            <select id="kittenToCreateMother" name="mother" value={kittenToCreate.mother} onChange={handleChange}>
              <option value="">Select Dam</option>
                {dams.map((dam, index) => (
                  <option key={index} value={dam.name}>{dam.name}</option>
                ))}
            </select> <br />
          </>
          <>
            <label htmlFor="kittenToCreate">Father</label>
            <select id="kittenToCreateFather" name="father" value={kittenToCreate.father} onChange={handleChange}>
              <option value="">Select Stud</option>
                {studs.map((stud, index) => (
                  <option key={index} value={stud.name}>{stud.name}</option>
                ))}
            </select> <br />
          </>
          <>
            <label htmlFor="kittenToCreatePrice">Price</label>
            <input
              type="number"
              name='price'
              placeholder='price'
              value={kittenToCreate.price}
              onChange={handleChange}
            /> <br />
          </>
          <>
            <label htmlFor="kittenToCreateLocation">Location</label>
            <input id='kittenToCreateLocation'
              type='text'
              name='location'
              placeholder='Location'
              value={kittenToCreate.location}
              onChange={handleChange}
            />
          </>
          <>
            <label htmlFor='createKittenDob'>
              Date of Birth
            </label>
            <input type="text"
              id="createKittenDob"
              name='dob'
              placeholder='DOB'
              value={kittenToCreate.dob}
              onChange={handleChange}
            />
          </>
          <>
          <label htmlFor="kittenToCreateDescription">Description</label>
            <textarea name="description" cols="50" rows="8" placeholder='description'></textarea>
          </>
          <div className='buttonsWrapper'>
            <button className='buttonStyle2' type='submit'>Create</button>
          </div>
        </form>
     }
    </>
  )


}

export default CreateKitten
