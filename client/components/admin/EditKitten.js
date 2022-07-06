import React, {useState, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../secrets'
import ErrorFill from '../ErrorFill'
import history from '../../history'
import { furColors, eyeColors} from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import axios from 'axios'

const EditKitten = () => {
  const {type} =useContext(MeContext)

  let kittenFromHistory = null
  let errorFromHistory = null

  if(history.location.state) {
    kittenFromHistory = history.location.state.kitten
    errorFromHistory = history.location.state.error
  }

  const [initialState, setInitialState] = useState(kittenFromHistory ? {... kittenFromHistory} : null)
  const [kittenToEdit, setKittenToEdit] = useState(kittenFromHistory)
  const [error, setError] = useState(errorFromHistory)
  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  const handleChange = (event) => {
    // console.log(event.key)
    if(!kittenToEdit) return
    handleControlledValueFieldToState(event, setKittenToEdit)
  }

  const handleReset = () => {
    setKittenToEdit(initialState)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('kitten before api call: ' , kittenToEdit)
      const {data} = await axios.put('/api/kittens', kittenToEdit)
      console.log(data)
      setInitialState(data)
      history.push('/kittenDetailed', {kitten: kittenToEdit, fromEdit: true})
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  return (
    <>
      {error && <ErrorFill msg={error} />}

      {! error &&!isPrivileged(type) &&
        <h2>You don't have the privileges to view this page</h2>
      }

      {!error && !kittenToEdit &&
        <ErrorFill msg="No Kitten Loaded. Report this issue to System Admin" />
      }

      {!error && isPrivileged(type) && kittenToEdit &&
      <div>
        <img src={kittenToEdit.mainImageSrcValue} alt="kitten to edit" style={imgInLine} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>EDIT SELECTED KITTEN</h2>
          <input
            type="text"
            name='name'
            placeholder='Name'
            value={kittenToEdit.name}
            onChange={handleChange} /> <br />
          <input
            type="text"
            name='serialNumber'
            placeholder='serial number'
            value={kittenToEdit.serialNumber}
            onChange={handleChange} /> <br />
          <select name="gender" value={kittenToEdit.gender} onChange={handleChange}>
            <option value="">Boy or Girl?</option>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select> <br />
          <select name="ears" value={kittenToEdit.ears} onChange={handleChange}>
          <option value="">Fold or Straight</option>
            <option value="fold">Fold</option>
            <option value="straight">Straight</option>
            <option value="noPref">No Preference</option>
          </select> <br />
          <select name="furColor" value={kittenToEdit.furColor} onChange={handleChange}>
          <option value="">Fur Color</option>
            {furColors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
            <option value="noPref">No Preference</option>
          </select> <br />
          <select name="eyeColor" value={kittenToEdit.eyeColor} onChange={handleChange}>
          <option value="">Eye Color</option>
            {eyeColors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
              ))}
          </select> <br />
          <input type="text" name='mother' placeholder='Dam' value={kittenToEdit.mother} onChange={handleChange} /> <br />
          <input type="text" name='father' placeholder='Stud' value={kittenToEdit.father} onChange={handleChange} /> <br />
          <select name="isAvailable" value={kittenToEdit.isAvailable} onChange={handleChange}>
            <option value="isAvailable">isAvailable</option>
            <option value="reserved">Reserved</option>
            <option value="sold">Sold</option>
          </select><br />
          <button onClick={handleReset} type='button'>Reset Changes</button>
          <button type='submit'>Submit Changes</button>

        </form>
      </div>
      }
    </>
  )
}

export default EditKitten
