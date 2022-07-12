import React, {useState, useEffect} from 'react'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import {furColors, eyeColors} from "../../../myModelsConfig"
import history from '../../history'
import useFetchParents from '../../customHooks/fetchDamsAndStuds'
import axios from 'axios'


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
    try {
      event.preventDefault()
      const {data} = await axios.post('/api/kittens', kittenToCreate)
      history.push(`/kittenDetailed/${data.id}`, {kitten: data, error: error, fromCreate: true})
      setError(null)
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  // useFetchParents()

  useEffect(() => {

    const fetchDamsAndStuds = async () => {
      try {
        let mothers = await axios.get('/api/mothers')
        let fathers = await axios.get('/api/studs')
        mothers = mothers.data.map(mother => (mother.name))
        fathers = fathers.data.map(father => (father.name))
        setError('')
        setDams(mothers)
        setStuds(fathers)
      } catch (err) {
        console.log(err)
        setError(err.message)
      }
    }

    fetchDamsAndStuds()
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
