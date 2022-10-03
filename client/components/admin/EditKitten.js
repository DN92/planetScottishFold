import React, {useState, useEffect, useContext} from 'react'
import MeContext from '../../MeContextPro'
import { isPrivileged } from '../../../myModelsConfig'
import ErrorFill from '../ErrorFill'
import history from '../../history'
import { furColorsAdmin, eyeColors, genderOptions, earOptions, statusOptionsKitten} from '../../../myModelsConfig'
import handleControlledValueFieldToState from '../../customHandlers/handleFormChange'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import { useParams } from 'react-router-dom'

const EditKitten = () => {
  const {type} = useContext(MeContext)
  const {id} = useParams()

  const [kittenToEdit, setKittenToEdit] = useState(history.location.state?.kitten)
  const [error, setError] = useState('')
  const [dams, setDams] = useState([])
  const [studs, setStuds] = useState([])
  const [posted, setPosted] = useState(null)

  const imgInLine= {
    width: "100%",
    maxWidth: "400px",
    maxHeight: "400px",
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
    fetchEffect(
      [setPosted, setError],
      'put',
      `api/kittens`,
      kittenToEdit
    )
  }

  useEffect(() => {
    if(posted) {
      history.push(`/kittenDetailed/${posted.id}`, {kitten: posted, fromEdit: true})
    }
  }, [posted])

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
        <>
          <h2>EDIT SELECTED KITTEN</h2>
          <div>
            <img src={kittenToEdit.mainImageSrcValue} alt="kitten to edit" style={imgInLine} />
            <form onKeyDown={handleKeyPress} onSubmit={handleSubmit}>
              <>
                <label htmlFor="editKittenName">Name</label>
                <input id='editKittenName'
                  type="text"
                  name='name'
                  placeholder='Name'
                  value={kittenToEdit.name}
                  onChange={handleChange}
                /> <br />
              </>
              <>
              <label htmlFor="editKittenBreed">Breed</label>
              <input id="editKittenBreed"
                type="text"
                name='breed'
                placeholder='Cat Breed'
                value={kittenToEdit.breed}
                onChange={handleChange}
              /> <br />
              </>
              <>
                <label htmlFor="editKittenRegNum">Reg Num</label>
                <input id="editKittenRegNum"
                  type="text"
                  name='regNum'
                  placeholder='Registration Number'
                  value={kittenToEdit.regNum}
                  onChange={handleChange}
                /> <br />
              </>
              <>
                <label htmlFor="editKittenGender">Gender</label>
                <select id="editKittenGender"
                  name="gender"
                  value={kittenToEdit.gender}
                  onChange={handleChange}
                >
                    {genderOptions.map((ear, index) => (
                      <option key={index} value={ear}>{ear}</option>
                    ))}
                </select> <br />
              </>
              <>
                <label htmlFor="editKittensEars">Ears</label>
                <select id='editKittensEars'
                  name="ears"
                  value={kittenToEdit.ears}
                  onChange={handleChange}
                >
                    {earOptions.map((ear, index) => (
                      <option key={index} value={ear}>{ear}</option>
                    ))}
                </select> <br />
              </>
              <>
                <label htmlFor="editKittenFur">Fur Color</label>
                <select id="editKittenFur"
                  name="furColor"
                  value={kittenToEdit.furColor}
                  onChange={handleChange}
                >
                  {furColorsAdmin.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                  ))}
                </select> <br />
              </>
              <>
              </>
              <>
                <label htmlFor="editKittenEyes">Eye Color</label>
                <select id="editKittenEyes"
                  name="eyeColor"
                  value={kittenToEdit.eyeColor}
                  onChange={handleChange}
                >
                  <option value="">Eye Color</option>
                    {eyeColors.map((color, index) => (
                      <option key={index} value={color}>{color}</option>
                      ))}
                </select> <br />
              </>
              <>
                <label htmlFor="editKittenMother">Mother</label>
                <select id="editKittenMother"
                  name="mother"
                  value={kittenToEdit.mother}
                  onChange={handleChange}
                >
                  {dams.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                  ))}
                </select> <br />
              </>
              <>
                <label htmlFor="editKittenFather">Father</label>
                <select id="editKittenFather"
                  name="father"
                  value={kittenToEdit.father}
                  onChange={handleChange}
                >
                  {studs.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                  ))}
                </select> <br />
              </>
              <>
                <label htmlFor="editKittenPrice">Price</label>
                <input id="editKittenPrice"
                  type="number"
                  name='price'
                  placeholder='price'
                  value={kittenToEdit.price}
                  onChange={handleChange} /> <br />
              </>
              <>
                <label htmlFor="editKittenStatus">Status</label>
                <select id="editKittenStatus"
                  name="status"
                  value={kittenToEdit.status}
                  onChange={handleChange}
                >

                  {statusOptionsKitten.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select><br />
              </>
              <>
                <label htmlFor="editKittenDescription">Description</label>
              <textarea id="editKittenDescription"
                name="description"
                value={kittenToEdit.description}
                onChange={handleChange}
                cols="50" rows="15"
                placeholder='description'
              />
              </>
              <>
                <label htmlFor="kittenToEditLocation">Location</label>
                <input id='kittenToEditLocation'
                  type='text'
                  name='location'
                  placeholder='Location'
                  value={kittenToEdit.location}
                  onChange={handleChange}
                />
              </>
              <label htmlFor='editKittenDob'>
                Date of Birth
              </label>
              <input type="text"
                id="editKittenDob"
                name='dob'
                placeholder='DOB'
                value={kittenToEdit.dob}
                onChange={handleChange}
              />
              <div className='buttonsWrapper'>
                <button className='buttonStyle2' onClick={handleReset} type='button'>Reset Changes</button>
                <button className='buttonStyle2' type='submit'>Submit Changes</button>
              </div>
            </form>
          </div>
        </>
      }
    </>
  )
}

export default EditKitten
