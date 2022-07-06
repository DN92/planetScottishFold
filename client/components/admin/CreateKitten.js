import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import {furColors, eyeColors} from "../../../myModelsConfig"
import axios from 'axios'
import history from '../../history'


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
  }

  const [kittenToCreate, setKittenToCreate] = useState(defaultState)
  const [dams, setDams] = useState([])
  const [studs, setStuds] = useState([])
  const [error, setError] = useState(null)


  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setKittenToCreate)
  }

  // const handleImage = (event) => {
    //   console.log(event)

    //   return
    // }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      console.log(kittenToCreate)
      const {data: kitten} = await axios.post('/api/kittens', kittenToCreate)
      // const kitten = data
      console.log('kitten: ', kitten)
      history.push('/kittenDetailed', {kitten: kitten, error: error, fromCreate: true})

      setError(null)

    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchDamsAndStuds = async () => {
      try {
        const mothers = await axios.get('/api/mothers')
        const fathers = await axios.get('/api/studs')
        dams = (mothers.data).map(mother => (mother.name))
        studs = (fathers.data).map(father => (father.name))
        return [dams, studs]

      } catch (err) {
        console.log(err)
        setError(err)
      }
    }

    const {dams, studs} = fetchDamsAndStuds
    setDams(dams)
    setStuds(studs)
  }, [])

  return (
    <div>
      {/* <input type="file" name='mainImageSrcValue' placeholder='Main Picture' value={''} onChange={handleImage} /> <br /> */}
      <form onSubmit={handleSubmit}>
        <h2>Kitten Creation Form</h2>
        <input type="text" name='name' placeholder='Name' value={kittenToCreate.name} onChange={handleChange} /> <br />
        <input type="text" name='serialNumber' placeholder='serial number' value={kittenToCreate.serialNumber} onChange={handleChange} /> <br />
        <select name="gender" value={kittenToCreate.gender} onChange={handleChange}>
          <option value="">Boy or Girl?</option>
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
        </select> <br />
        <select name="ears" value={kittenToCreate.ears} onChange={handleChange}>
        <option value="">Fold or Straight</option>
          <option value="fold">Fold</option>
          <option value="straight">Straight</option>
          <option value="noPref">No Preference</option>
        </select> <br />
        <select name="furColor" value={kittenToCreate.furColor} onChange={handleChange}>
        <option value="">Fur Color</option>
          {furColors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
          <option value="noPref">No Preference</option>
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
          {dams.map((name, index) => (
            <option key={index} value={name}>{name}</option>
            ))}
        </select> <br />
        <input type="text" name='mother' placeholder='Dam' value={kittenToCreate.mother} onChange={handleChange} /> <br />
        <input type="text" name='father' placeholder='Stud' value={kittenToCreate.father} onChange={handleChange} /> <br />
        <button type='submit'>Create</button>

      </form>

    </div>
  )


}

export default CreateKitten
