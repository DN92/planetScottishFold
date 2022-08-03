import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import history from '../history'
import {furColors, furColorsOnQuestionnaire, eyeColors, mifOptions, budgetRanges, earOptions, genderOptions, willBreedOptions, hasAllergiesOptions, foundUsByOptions} from "../../myModelsConfig"
import handleFormChange from '../customHandlers/handleFormChange'
import useLocalStorage from '../customHooks/useLocalStorage'
import MeContext from '../MeContextPro'


const ClientQuestionnaire = () => {

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

  const handleChange = (event) => {
    event.preventDefault()
    handleFormChange(event, setClientInfo)
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
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const furColorsToArray = Object.keys(clientInfo.furColor)
      .filter(color => clientInfo.furColor[color] === true)
    history.push('/confirmClientQuestionnaire', {clientInfo:
      {...clientInfo, 'furColor': furColorsToArray}
    })
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
          <form id="clientQuestionnaire" className='waitingList__form' onSubmit={handleSubmit} onKeyDown={handleKeyPress} onReset={handleReset}
          >
            <div className='waitingList-left'>
              <h4>About You</h4>
              <>
                <label htmlFor="clientFormEmail" className='required'>E-mail</label>
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
                  onChange={handleChange}
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
                <label htmlFor="clientFormEyeColor" className='required'>Eye Color</label>
                <select id="clientFormEyeColor" name="eyeColor" value={clientInfo.eyeColor} onChange={handleChange} required>
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
