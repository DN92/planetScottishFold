import React, {useState, useEffect, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../secrets'
import ErrorFill from '../ErrorFill'
import history from '../../history'
import { furColors, eyeColors} from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import axios from 'axios'

const EditMother = () => {

  const {type} =useContext(MeContext)

  let motherFromHistory = null
  let errorFromHistory = ''

  if(history.location.state) {
    motherFromHistory = history.location.state.mother
    errorFromHistory = history.location.state.error
  }

  const [initialState, setInitialState] = useState(motherFromHistory ? {... motherFromHistory} : null)
  const [motherToEdit, setMotherToEdit] = useState(motherFromHistory)
  const [error, setError] = useState(errorFromHistory )
  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  const handleChange = (event) => {
    // if(!motherToEdit) return
    handleControlledValueFieldToState(event, setMotherToEdit)
  }

  const handleReset = () => {
    setMotherToEdit(initialState)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('mother before api call: ' , motherToEdit)
      const {data} = await axios.put('/api/mothers', motherToEdit)
      console.log(data)
      setInitialState(data)
      history.push('/motherDetailed', {mother: motherToEdit, fromEdit: true})
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

      {!error && !motherToEdit &&
        <ErrorFill msg="No Dam Loaded. Report this issue to System Admin" />
      }

      {!error && isPrivileged(type) && motherToEdit &&
      <div>
        <img src={motherToEdit.mainImageSrcValue} alt="mother to edit" style={imgInLine} />
        <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
          <h2>EDIT SELECTED DAM</h2>
          <input
            type="text"
            name='name'
            placeholder='Name'
            value={motherToEdit.name}
            onChange={handleChange} /> <br />
          <input
            type="text"
            name='serialNumber'
            placeholder='serial number'
            value={motherToEdit.serialNumber}
            onChange={handleChange} /> <br />
          <input
            type="text"
            name='dob'
            placeholder='Date of Birth'
            value={motherToEdit.dob}
            onChange={handleChange} /> <br />
          <select name="gender" value={motherToEdit.gender} onChange={handleChange}>
            <option value="">Boy or Girl?</option>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select> <br />
          <select name="ears" value={motherToEdit.ears} onChange={handleChange}>
            <option value="">Fold or Straight</option>
            <option value="fold">Fold</option>
            <option value="straight">Straight</option>
            <option value="noPref">No Preference</option>
          </select> <br />
          <input
            type="text"
            name='furColor'
            placeholder='Fur Color'
            value={motherToEdit.furColor}
            onChange={handleChange} /> <br />
          <select name="eyeColor" value={motherToEdit.eyeColor} onChange={handleChange}>
          <option value="">Eye Color</option>
            {eyeColors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
              ))}
          </select> <br />
          <button onClick={handleReset} type='button'>Reset Changes</button>
          <button type='submit'>Submit Changes</button>

        </form>
      </div>
      }
    </>
  )
}

export default EditMother
