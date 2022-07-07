import React, {useState, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../secrets'
import ErrorFill from '../ErrorFill'
import history from '../../history'
import { eyeColors } from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import axios from 'axios'

const EditMother = () => {

  const MOTHERorFATHER = history.location.state
  ? history.location.state.parent
  : 'mother'

  const {type} =useContext(MeContext)

  let catFromHistory = null
  let errorFromHistory = ''

  if(history.location.state) {
    catFromHistory = history.location.state.cat
    errorFromHistory = history.location.state.error
  }

  const [initialState, setInitialState] = useState(catFromHistory ? {... catFromHistory} : null)
  const [catToEdit, setCatToEdit] = useState(catFromHistory)
  const [error, setError] = useState(errorFromHistory )
  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  const handleChange = (event) => {
    // if(!motherToEdit) return
    handleControlledValueFieldToState(event, setCatToEdit)
  }

  const handleReset = () => {
    setCatToEdit(initialState)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('cat before api call: ' , catToEdit)
      const {data} = await axios.put(`/api/${MOTHERorFATHER}s`, catToEdit)
      console.log(data)
      setInitialState(data)
      history.push(`/${MOTHERorFATHER}Detailed`, {cat: catToEdit, fromEdit: true, parent: MOTHERorFATHER})
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

      {!error && !catToEdit &&
        <ErrorFill msg={`No ${MOTHERorFATHER} Loaded. Report this issue to System Admin`} />
      }

      {!error && isPrivileged(type) && catToEdit &&
      <div>
        <img src={catToEdit.mainImageSrcValue} alt="cat to edit" style={imgInLine} />
        <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
          <h2>EDIT SELECTED {`${MOTHERorFATHER}`}</h2>
          <input
            type="text"
            name='name'
            placeholder='Name'
            value={catToEdit.name}
            onChange={handleChange} /> <br />
          <input
            type="text"
            name='serialNumber'
            placeholder='serial number'
            value={catToEdit.serialNumber}
            onChange={handleChange} /> <br />
          <input
            type="text"
            name='dob'
            placeholder='Date of Birth'
            value={catToEdit.dob}
            onChange={handleChange} /> <br />
          <select name="ears" value={catToEdit.ears} onChange={handleChange}>
            <option value="">Fold or Straight</option>
            <option value="fold">Fold</option>
            <option value="straight">Straight</option>
            <option value="noPref">No Preference</option>
          </select> <br />
          <input
            type="text"
            name='furColor'
            placeholder='Fur Color'
            value={catToEdit.furColor}
            onChange={handleChange} /> <br />
          <select name="eyeColor" value={catToEdit.eyeColor} onChange={handleChange}>
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
