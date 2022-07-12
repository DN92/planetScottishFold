import React, {useState, useEffect, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../secrets'
import ErrorFill from '../ErrorFill'
import history from '../../history'
import { furColors, eyeColors} from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import axios from 'axios'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import { useParams } from 'react-router-dom'

const EditKitten = () => {
  const {type} = useContext(MeContext)
  const {id} = useParams()

  const [kittenToEdit, setKittenToEdit] = useState(history.location.state
    ? history.location.state.kitten
    : null
  )
  const [error, setError] = useState(history.location.state
    ? history.location.state.error
    : ''
  )
  const [dams, setDams] = useState([])
  const [studs, setStuds] = useState([])

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  const handleChange = (event) => {
    if(!kittenToEdit) return
    handleControlledValueFieldToState(event, setKittenToEdit)
  }

  const handleReset = () => {
    setKittenToEdit(initialState)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const {data} = await axios.put('/api/kittens', kittenToEdit)
      setKittenToEdit(data)
      history.push(`/kittenDetailed/${data.id}`, {kitten: kittenToEdit, fromEdit: true})
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  useEffect(() => {
    !kittenToEdit && id && fetchEffect(
      [setKittenToEdit, setError],
      'put',
      `/api/kittens`,
      kittenToEdit
    )

    !dams.length && fetchEffect(
      [setDams, setError],
      'get',
      `/api/mothers?onlyNames=true`
    )
    !studs.length && fetchEffect(
      [setStuds, setError],
      'get',
      `api/fathers?onlyNames=true`
    )
  },[])

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
          <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
            <h2>EDIT SELECTED KITTEN</h2>
            <input
              type="text"
              name='name'
              placeholder='Name'
              value={kittenToEdit.name}
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
            <select name="mother" value={kittenToEdit.mother} onChange={handleChange}>
              <option value="">Select Dam</option>
                {dams.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
            </select> <br />
            <select name="father" value={kittenToEdit.father} onChange={handleChange}>
              <option value="">Select Stud</option>
                {studs.map((name, index) => (
                  <option key={index} value={name}>{name}</option>
                ))}
            </select> <br />
            <input
              type="number"
              name='price'
              placeholder='price'
              value={kittenToEdit.price}
              onChange={handleChange} /> <br />
            <select name="isAvailable" value={kittenToEdit.isAvailable} onChange={handleChange}>
              <option value="isAvailable">isAvailable</option>
              <option value="reserved">Reserved</option>
              <option value="sold">Sold</option>
            </select><br />
            <input
              type="text"
              name='regNum'
              placeholder='Registration Number'
              value={kittenToEdit.regNum}
              onChange={handleChange} /> <br />
            <textarea name="description" cols="50" rows="15" placeholder='description'></textarea>
            <button onClick={handleReset} type='button'>Reset Changes</button>
            <button type='submit'>Submit Changes</button>
          </form>
        </div>
      }
    </>
  )

  // return (
  //   <div></div>
  // )
}

export default EditKitten
