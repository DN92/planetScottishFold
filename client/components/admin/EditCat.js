import React, {useState, useEffect, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../secrets'
import ErrorFill from '../ErrorFill'
import history from '../../history'
import { eyeColors } from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { fetchEffect } from '../axiosHandlers/fetchEffect'

const EditCat = () => {
  const {type} = useContext(MeContext)
  const {MOTHERorFATHER, id} = useParams()

  const [catToEdit, setCatToEdit] = useState(history.location.state
    ? history.location.state.cat
    : null
  )
  const [catLoaded, setCatLoaded] = useState(false)
  const [initialState, setInitialState] = useState(catToEdit
    ? catToEdit
    : {}
  )
  const [error, setError] = useState(history.location.state
    ? history.location.state.error
    : ''
  )

  const imgInLine= {
    width: "100%",
    maxWidth: "200px",
    maxHeight: "200px",
    marginLeft: "2%",
  }

  const handleChange = (event) => {
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
    !Object.key(initialState).length && setInitialState(catToEdit)
    try {
      const {data} = await axios.put(`/api/${MOTHERorFATHER}s`, catToEdit)
      setInitialState(data)
      history.push(`/catDetailed/${MOTHERorFATHER}/${data.id}`, {cat: catToEdit, fromEdit: true})
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  useEffect(() => {
    !catToEdit && id && fetchEffect(
      [setCatToEdit, setError],
      'get',
      `/api/${MOTHERorFATHER}s?id=${id}`
    )
    setCatLoaded(true)
  }, [])

  useEffect(()=>{
    !catToEdit && setCatLoaded(false)
    !catLoaded && catToEdit && setInitialState(catToEdit)
  },[catLoaded])

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
          <textarea name="description" cols="50" rows="15" value={catToEdit.description} placeholder='description'></textarea>
          <button onClick={handleReset} type='button'>Reset Changes</button>
          <button type='submit'>Submit Changes</button>

        </form>
      </div>
      }
    </>
  )
}

export default EditCat
