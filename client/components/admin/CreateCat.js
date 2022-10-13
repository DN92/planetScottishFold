import React, {useState, useEffect} from 'react'
import {eyeColors, earOptions} from "../../../myModelsConfig"
import history from "../../history"
import { useParams } from 'react-router-dom'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import { fetchEffect } from '../axiosHandlers/fetchEffect'


const CreateCat = () => {

  const {MOTHERorFATHER} = useParams()

  const defaultState = {
    name:'',
    breed: '',
    regNum: '',
    dob: '',
    ears: earOptions[0],
    furColor: '',
    eyeColor: eyeColors[0],
    description: '',
    location: '',
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
      <>
        <label htmlFor="catToCreateName">Name</label>
        <input id="catToCreateName"
          type="text"
          name='name'
          placeholder='Name'
          value={catToCreate.name}
          onChange={handleChange}
        /> <br />
        <button onClick={handleRandomName}>Randomize Name</button>
      </>
      <>
      </>
        <label htmlFor="catToCreateBreed">Breed</label>
        <input id="catToCreateBreed"
          type="text"
          name='breed'
          placeholder='Cat Breed'
          value={catToCreate.breed}
          onChange={handleChange}
      /> <br />
      <>
      </>
        <label htmlFor="catToCreateRegNum">Registration#</label>
        <input id="catToCreateRegNum"
          type="text"
          name='regNum'
          placeholder='Registration Number'
          value={catToCreate.regNum}
          onChange={handleChange}
      /> <br />
      <>
        <label htmlFor="catToCreateDob">Date of Birth</label>
        <input id="catToCreateDob"
          type="text"
          name='dob'
          placeholder='Date of Birth'
          value={catToCreate.dob}
          onChange={handleChange}
          /> <br />
      </>
      <>
        <label htmlFor="catToCreate">Ears</label>
        <select name="ears" value={catToCreate.ears} onChange={handleChange}>
          <option value={earOptions[0]}>Fold or Straight</option>
          {earOptions.map((ear, index) => (
            <option key={index} value={ear}>{ear}</option>
          ))}
        </select> <br />
      </>
      <>
        <label htmlFor="catToCreateFur">Fur Color</label>
        <input id="catToCreateFur"
          type="text"
          name='furColor'
          placeholder='Fur Color'
          value={catToCreate.furColor}
          onChange={handleChange}
        /> <br />
      </>
      <>
        <label htmlFor="catToCreateEyes">Eye Color</label>
        <select id="catToCreateEyes" name="eyeColor" value={catToCreate.eyeColor} onChange={handleChange}>
          <option value="">Eye Color</option>
          {eyeColors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
            ))}
        </select> <br />
      </>
      <>
        <label htmlFor="catToCreateLocation">Location</label>
        <input id='catToCreateLocation'
          type='text'
          name='location'
          placeholder='Location'
          value={catToCreate.location}
          onChange={handleChange}
        />
      </>
      <>
        <label htmlFor="catToCreateDescription">Description</label>
        <textarea id="catToCreateDescription" name="description" cols="50" rows="8" placeholder='description'></textarea>
      </>
      <div className='buttonsWrapper'>
        <button className='buttonStyle2' type='submit'>Create</button>
      </div>
    </form>
  )
}

export default CreateCat
