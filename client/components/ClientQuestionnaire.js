import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {furColors, eyeColors, mifOptions, budgetRanges, earOptions, genderOptions, willBreedOptions, hasAllergiesOptions, foundUsByOptions} from "../../myModelsConfig"
import handleFormChange from '../customHandlers/handleFormChange'
import useLocalStorage from '../customHooks/useLocalStorage'
import MeContext from '../MeContextPro'
import axios from 'axios'
import ErrorFill from './ErrorFill'
import { convertToPhoneNumber } from '../../myUtilFuncs'


const ClientQuestionnaire = () => {

  const navigate = useNavigate()
  const meContext = useContext(MeContext)

  const defaultClientInfo = {
    firstName: '',
    lastName: '',
    eMail: '',
    aboutYou: '',
    firstCat: '',
    otherPets: '',
    city: '',
    state: '',
    budget:'',
    fB: '',  //facebook
    iG: '',  // instagram
    gender:'',
    ears:'',
    eyeColor:'',
    furColor: {},
    mif:'',  // most important feature(s)
    willBreed: '',
    hasAllergies: '',
    foundUsBy: '',
    phoneNumber: '',
  }

  const [clientInfo, setClientInfo] = useLocalStorage('clientInfo', defaultClientInfo)
  const [showIncluded, setShowIncluded] = useState(false)
  const [formValidated, setFormValidated] = useState(false)
  const [displayBadEmail, setDisplayBadEmail] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    handleFormChange(event, setClientInfo)
    setDisplayBadEmail(false)
  }

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value
    if (value.length < 1) {
      setClientInfo(prev => ({...prev, phoneNumber: ''}))
      return
    }
    console.log(value)
    if(!/^[0-9- ]+$/.test(value)) return
    setClientInfo(prev => ({...prev, phoneNumber: convertToPhoneNumber(event.target.value)}))
  }

  const handleViewIncluded = () => {
    setShowIncluded(prev => !prev)
  }

  const handleCheckBoxForFur = (event) => {
    setClientInfo(prev => {
      const {name, checked} = event.target
      return {...prev,
        ['furColor']: {
          ...prev['furColor'],
          [name]: checked
        }
      }
    })
  }

  const handleReset = () => {
    setClientInfo(defaultClientInfo)
    setDisplayBadEmail(false)
    setShowIncluded(false)
    setError('')
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = async (event) => {
    const validateForm = async() => {
      try {
        const { data } = await axios.post('/api/users/validate', clientInfo)
        setFormValidated(data?.isValidSubmission ?? false)
        if(!data?.isValidSubmission) {
          setDisplayBadEmail(true)
          window.scrollTo(0, 0)
        }
      } catch (err) {
        setError(err)
      }
    }

    event.preventDefault();
    await validateForm()
  }

  useEffect(() => {
    if(formValidated) {
      const furColorsToArray = Object.keys(clientInfo.furColor)
        .filter(color => clientInfo.furColor[color] === true)
      navigate('/confirmClientQuestionnaire', {
          state: {
            clientInfo: {...clientInfo, 'furColor': furColorsToArray}}
      })
    }
  }, [formValidated])

  if(error) {
    return (
      <ErrorFill msg={error} />
    )
  }

  return (
    <>
      {meContext.id ?
        <div className='waitingList__already-approved'>
          <h4>You have already been Approved</h4>
          <Link to='/availableKittens'>Check out our kittens</Link>
          <p>or <Link to='/logout'>Logout</Link> </p>
          <div className='home__card2'>
            <img className='home__card2__img' src="/catPictures/catHome2.webp" alt="cute cat image2"/>
          </div>
        </div>
        :
        <div className='waitingList'>
          <p className='apply-header'>Apply for your Kitten</p>
          <p className='waitingList-description'>
            Please fill out this questionnaire to apply for a Planet Scottish Fold Kitten. Once your application is reviewed, you will be contacted. We require a $300 deposit to be on the waiting list for the future litters and a $500 non-refundable deposit to reserve a kitten from current litters. Remaining balance is due during pick up.
          </p>
          <div className='buttonsWrapper2'>
            <button className='buttonStyle4' onClick={handleViewIncluded}>Whats Included</button>
          </div>
          {showIncluded &&
            <div className='waitingList-info'>
              <ul>
                <li>1 year health guarantee (covers hereditary defects and offers a replacement kitten)</li>
                <li>age appropriate vaccinations and deworming </li>
                <li>spay/neuter once kitten is at least 12 weeks old (only NC kittens)</li>
                <li>microchip</li>
                <li>well socialized kitten raised at home in warm and loving environment with other pets and children</li>
                <li>weaned off and litter box trained kitten</li>
                <li>weekly updates with photos and/or videos</li>
                <li>lifetime breeder support</li>
                <li>30 days FREE pet insurance (NY and FL excluded) </li>
                <li>FaceTime is available before or after the reservation. </li>
              </ul>
            </div>

          }
          <form id="clientQuestionnaire" className='waitingList__form'
            onSubmit={handleSubmit}
            onKeyDown={handleKeyPress}
            onReset={handleReset}
          >
            <div className='waitingList-left'>
              <h4>About You</h4>
              <>
                <label htmlFor="clientFormEmail"
                  className={displayBadEmail ? 'required error' : 'required'}
                >
                  {displayBadEmail ? 'That email is already in use' : 'E-mail'}
                </label>
                <input id="clientFormEmail"
                  type="email"
                  name="eMail"
                  value={clientInfo.eMail}
                  placeholder="E-mail"
                  onChange={handleChange}
                  required
                />
              </>
              <>
                <label htmlFor="clientFormFName" className='required'>First Name</label>
                <input  id="clientFormFName"
                  type="text"
                  name="firstName"
                  value={clientInfo.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </>
              <>
                <label htmlFor="clientFormTName" className='required'>Last Name</label>
                <input id="clientFormTName"
                  type="text"
                  name="lastName"
                  value={clientInfo.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </>
              <>
                <label htmlFor="clientFormAboutYou" className='required'>Tell us a little about yourself</label>
                <textarea id='clientFormAboutYou'
                  name="aboutYou"
                  cols="40"
                  rows="5"
                  value={clientInfo.aboutYou}
                  placeholder='Please tell us a little about yourself.'
                  onChange={handleChange}
                  required
                />
              </>
              <>
                <label htmlFor="clientFormOtherPets" className='required'>Please list all other pets you own</label>
                <input id="clientFormOtherPets"
                  type="text"
                  name="otherPets"
                  value={clientInfo.otherPets}
                  placeholder='Other pets you own'
                  onChange={handleChange}
                  required
                />
              </>
              <>
                <label htmlFor="clientFormFirstCat" className='required'>Will this be your first cat?</label>
                <select id='clientFormFirstCat'
                  name="firstCat"
                  value={clientInfo.firstCat}
                  onChange={handleChange}
                  required
                >
                  <option value={''}></option>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </>
              <>
                <label htmlFor='clientFormWillBreed' className='required'>Planning to breed/mate your cat?</label>
                <select id='clientFormWillBreed'
                name="willBreed"
                value={clientInfo.willBreed}
                onChange={handleChange}
                required
                >
                  <option value=''></option>
                  {willBreedOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </>
              <>
                <label htmlFor="clientFormHasAllergies" className='required'>Is anyone in your household allergic to cats?</label>
                <select id='clientFormHasAllergies'
                  name="hasAllergies"
                  value={clientInfo.hasAllergies}
                  onChange={handleChange}
                  required
                >
                  <option value=''></option>
                  {hasAllergiesOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </>
              <>
                <label className="required" htmlFor="clientFormFoundBy">How did you find us?</label>
                <select id="clientFormFoundBy"
                  name="foundUsBy"
                  value={clientInfo.foundUsBy}
                  onChange={handleChange}
                  required
                >
                  <option value=''></option>
                  {foundUsByOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </>

              <h4>Where are you from?</h4>

              <>
                <label htmlFor="clientFormCity" className='required'>City</label>
                <input id="clientFormCity"
                  type="text"
                  name="city"
                  value={clientInfo.city}
                  placeholder="your city"
                  onChange={handleChange}
                  required
                />
              </>
              <>
                <label htmlFor="clientFormState" className='required'>State</label>
                <input id='clientFormState'
                  type="text"
                  name="state"
                  value={clientInfo.state}
                  placeholder="your state"
                  onChange={handleChange}
                  required
                />
              </>
              <>
                <label htmlFor="clientFormPhoneNumber" className='required'>Phone Number</label>
                <input className="required"
                  type="text"
                  name="phoneNumber"
                  value={clientInfo.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </>
            </div>


            <div className='waitingList-right'>
              <h4>Kitten Preferences</h4>
              <>
                <label htmlFor="clientFormGender" className='required'>Boy or Girl?</label>
                <select id='clientFormGender' name="gender" value={clientInfo.gender} onChange={handleChange} required>
                  <option value={''}></option>
                  {genderOptions.map((gen, index) => (
                    <option key={index} value={gen}>{gen}</option>
                  ))}
                </select>
              </>
              <>
                <label htmlFor="clientFormEars" className='required'>Fold or Straight</label>
                <select id='clientFormEars' name="ears" value={clientInfo.ears} onChange={handleChange} required>
                  <option value={''}></option>
                  {earOptions.map((ear, index) => (
                    <option key={index} value={ear}>{ear}</option>
                  ))}
                </select>
              </>
              <>
                <label htmlFor="clientFormEyeColor">Eye Color</label>
                <select id="clientFormEyeColor" name="eyeColor" value={clientInfo.eyeColor} onChange={handleChange}>
                <option value={''}></option>
                  {eyeColors.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                  ))}
                </select>
              </>
              <>
                <label htmlFor='clientFormFurColors'>Fur Color Preferences</label>
                <div id='clientFormFurColors' className='cq-furcolors-wrapper'>
                  {furColors.map((fur, index) => (
                    <div key={index} className='cq-single-color-wrapper'>
                      <input id={`cq-fur-${fur}`}
                        type='checkbox'
                        name={fur}
                        onChange={handleCheckBoxForFur}
                        checked={!!clientInfo.furColor[fur]}
                      >
                      </input>
                      <label htmlFor={`cq-fur-${fur}`}>{fur}</label>
                    </div>
                  ))}
                </div>
              </>
              <>
                <label htmlFor="clientForm" className='required'>Budget</label>
                <select name="budget" value={clientInfo.budget} onChange={handleChange} required>
                  <option value={''}></option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </>
              <>
                <label htmlFor="clientFormMif" className='required'>What Is Most Important</label>
                <select id='clientFormMif' name="mif" value={clientInfo.mif} onChange={handleChange} required>
                  <option value={''}></option>
                  {mifOptions.map((feature, index) => (
                    <option key={index} value={feature}>{feature}</option>
                  ))}
                </select>
              </>

              <h4>Your Social Media</h4>

              <>
                <label htmlFor="clientFormFb">Your Facebook</label>
                <input type="text"
                  name='fB'
                  value={clientInfo.fB}
                  onChange={handleChange}
                />
              </>
              <>
                <label htmlFor="clientFormIG">Your Instagram</label>
                <input type="text"
                  name='iG'
                  value={clientInfo.iG}
                  onChange={handleChange} />
              </>
            </div>
          </form>
          <div className='buttonsWrapper cq-form-buttons-bottom'>
            <button className='buttonStyle2' type="submit" form="clientQuestionnaire">Submit</button>
            <button className='buttonStyle2' type="reset" onClick={handleReset} >Reset</button>
            <div className='cq-form-buttons-blank' ></div>
          </div>
        </div>
      }
    </>
  )
}

export default ClientQuestionnaire
