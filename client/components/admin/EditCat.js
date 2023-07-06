import React, {useState, useEffect, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../myModelsConfig'
import ErrorFill from '../ErrorFill'
import { eyeColors, earOptions, locationOptions } from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { fetchEffect } from '../axiosHandlers/fetchEffect'

const EditCat = () => {
  const navigate = useNavigate()
  const {type} = useContext(MeContext)
  const {MOTHERorFATHER, id} = useParams()
  const [catToEdit, setCatToEdit] = useState(location.state?.cat ?? null)
  const [catLoaded, setCatLoaded] = useState(false)
  const [initialState, setInitialState] = useState(catToEdit ?
    catToEdit :
    {}
  )
  const [posted, setPosted] = useState(null)
  const [error, setError] = useState('')

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
    !Object.keys(initialState).length && setInitialState(catToEdit)
    fetchEffect(
      [setPosted, setError],
      'put',
      `/api/${MOTHERorFATHER}s`,
      catToEdit
      )
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

  useEffect(() => {
    posted && navigate(`/catDetailedView/${MOTHERorFATHER}/${posted?.id}`)
  },[posted])

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
        <img src={catToEdit.mainImageSrcValue} alt="cat to edit" />
        <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
          <h2>EDIT SELECTED {`${MOTHERorFATHER}`}</h2>
          <>
            <label htmlFor="catToEditName">Name</label>
            <input id='catToEditName'
              type="text"
              name='name'
              placeholder='Name'
              value={catToEdit.name}
              onChange={handleChange}
            /> <br />
          </>
          <>
            <label htmlFor="catToEditBreed">Breed</label>
            <input id="catToEditBreed"
              type="text"
              name='breed'
              placeholder='Cat Breed'
              value={catToEdit.breed}
              onChange={handleChange}
            /> <br />
          </>
          <>
            <label htmlFor="catToEditDob">Date of Birth</label>
            <input id="catToEditDob"
              type="text"
              name='dob'
              placeholder='Date of Birth'
              value={catToEdit.dob}
              onChange={handleChange}
            /> <br />
          </>
          <>
            <label htmlFor="catToEditEars">Ears</label>
            <select id="catToEditEars" name="ears" value={catToEdit.ears} onChange={handleChange}>
              <option value={earOptions[0]}>Fold or Straight</option>
              {earOptions.map((ear, index) => (
                <option key={index} value={ear}>{ear}</option>
              ))}
            </select> <br />
          </>
          <>
            <label htmlFor="catToEditFurColor">Fur Color</label>
            <input
              id="catToEditFurColor"
              type="text"
              name='furColor'
              placeholder='Fur Color'
              value={catToEdit.furColor}
              onChange={handleChange}
            /> <br />
          </>
          <>
            <label htmlFor="catToEditEyes">Eye Color</label>
            <select id="catToEditEyes" name="eyeColor" value={catToEdit.eyeColor} onChange={handleChange}>
              <option value="">Eye Color</option>
                {eyeColors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                  ))}
            </select> <br />
          </>
          <>
            <label htmlFor="catToEditLocation">Location</label>
            <select
              id='catToEditLocation'
              type='text'
              name='location'
              placeholder='Location'
              value={catToEdit.location}
              onChange={handleChange}
            >
              {locationOptions.map((loc, idx) => (
                <option key={idx+loc} value={loc}>{loc}</option>
              ))}
            </select>
          </>
          <>
            <label htmlFor="catToEditDescription">Description</label>
            <textarea id="catToEditDescription" name="description" cols="50" rows="8" value={catToEdit.description} onChange={handleChange} placeholder='description'></textarea>
          </>
          <div className='buttonsWrapper'>
            <button className='buttonStyle2' onClick={handleReset} type='button'>Reset Changes</button>
            <button className='buttonStyle2' type='submit'>Submit Changes</button>
          </div>
        </form>
      </div>
      }
    </>
  )
}

export default EditCat
