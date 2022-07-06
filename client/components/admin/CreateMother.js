import React from 'react'
import defaultCatPictureSrc from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'

const CreateMother = () => {

  const defaultState = {
    name:'',
    serialNumber: '',
    ears: '',
    furColor: '',
    eyeColor: '',
    age: null,
    image: defaultCatPictureSrc,
  }

  const [motherToCreate, setMotherToCreate] = useState(defaultState)
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setKittenToCreate)
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      console.log(motherToCreate)
      const {data: mother} = await axios.post('/api/mothers', motherToCreate)
      console.log('mother: ', mother)
      ///
      history.push('/motherDetailed', {kitten: kitten, error: error,
      fromCreate: true})
      ///

      setError(null)

    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <h2>Mother Creation Form</h2>
      <input type="text" name='name' placeholder='Name' value={motherToCreate.name} onChange={handleChange} /> <br />
      <input type="text" name='serialNumber' placeholder='serial number' value={motherToCreate.serialNumber} onChange={handleChange} /> <br />
      <input type="text" name='dob' placeholder='Date of Birth' value={motherToCreate.dob} onChange={handleChange} /> <br />
      <select name="ears" value={motherToCreate.ears} onChange={handleChange}>
      <option value="">Fold or Straight</option>
        <option value="fold">Fold</option>
        <option value="straight">Straight</option>
        <option value="noPref">No Preference</option>
      </select> <br />
      <select name="furColor" value={motherToCreate.furColor} onChange={handleChange}>
      <option value="">Fur Color</option>
        {furColors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
        <option value="noPref">No Preference</option>
      </select> <br />
      <select name="eyeColor" value={motherToCreate.eyeColor} onChange={handleChange}>
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
