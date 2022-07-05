import React, {useState, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../secrets'
import ErrorFill from '../ErrorFill'

const EditKitten = () => {
  const {type} =useContext(MeContext)

  let kittenFromHistory = null
  let errorFromHistory = null

  if(history.location.state) {
    kittenFromHistory = history.location.state.kitten
    errorFromHistory = history.location.state.error
  }

  const [kittenToEdit, setKittenToEdit] = useState(kittenFromState)
  const [error, setError] = useState(errorFromHistory)

  console.log('got here')

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
        <form onSubmit={handleSubmit}>
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
          <button type='submit'>Create</button>

        </form>
      }
    </>
  )
}

export default EditKitten
