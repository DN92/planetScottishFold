import React, { useState, useEffect } from 'react'
import history from '../history'
import {furColors, eyeColors, mifOptions, budgetRanges, earOptions, genderOptions} from "../../myModelsConfig"
import handleFormChange from '../customHandlers/handleFormChange'

const ClientQuestionnaire = () => {

  const defaultClientInfo = {
    firstName: '',
    lastName: '',
    eMail: '',
    aboutYou: '',
    firstCat: '',
    otherPets: '',
    city: '',
    state: '',
    budget:'any',
    fB: '',  //facebook
    iG: '',  // instagram
    gender:'',
    ears:'',
    eyeColor:'',
    furColor: '',
    mif:'',  // most important feature(s)
  }

  const [clientInfo, setClientInfo] = useState(defaultClientInfo)

  useEffect(()=>{
    setClientInfo(
      JSON.parse(localStorage.getItem('clientInfo')) ?
        JSON.parse(localStorage.getItem('clientInfo')) :
        defaultClientInfo
      )
  },[])

  const handleChange = (event) => {
    event.preventDefault()
    handleFormChange(event, setClientInfo)
  }

  const handleReset = () => {
    localStorage.removeItem('clientInfo')
    setClientInfo(defaultClientInfo)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/confirmClientQuestionnaire')
  }

  return (
    <div className='waitingList'>
      <form id="clientQuestionnaire" onSubmit={handleSubmit} onKeyDown={handleKeyPress} onReset={handleReset}
      >
        <h4>About You</h4>
        <label htmlFor="clientFormFName">First Name</label>
        <input  id="clientFormFName"
          type="text"
          name="firstName"
          value={clientInfo.firstName}
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <label htmlFor="clientFormTName">Last Name</label>
        <input id="clientFormTName"
          type="text"
          name="lastName"
          value={clientInfo.lastName}
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <label htmlFor="clientFormEmail">EMail</label>
        <input id="clientFormEmail"
          type="email"
          name="eMail"
          value={clientInfo.eMail}
          placeholder="E Mail"
          onChange={handleChange}
          required
        />
        <label htmlFor="clientFormAboutYou">Tell us a little about yourself</label>
        <textarea id='clientFormAboutYou'
          name="aboutYou"
          cols="40"
          rows="5"
          value={clientInfo.aboutYou}
          placeholder='Please tell us a little about yourself.'
          onChange={handleChange}
          required
        />
        <label htmlFor="clientFormFirstCat">Will this be your first cat?</label>
        <select id='clientFormFirstCat'
          name="firstCat"
          value={clientInfo.firstCat}
          onChange={handleChange}
          placeholder='test'
          required
        >
            <option value={''}></option>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
        </select>

        <label htmlFor="clientFormOtherPets">Please list out all other pets you own here</label>
        <input id="clientFormOtherPets"
          type="text"
          name="otherPets"
          value={clientInfo.otherPets}
          placeholder='If any, what other pets do you own?'
          onChange={handleChange}
          required
        />

        <h4>Where are you from?</h4>
        <label htmlFor="clientFormCity">City</label>
        <input id="clientFormCity"
          type="text"
          name="city"
          value={clientInfo.city}
          placeholder="your city"
          onChange={handleChange}
          required
        />
        <label htmlFor="clientFormState">State</label>
        <input id='clientFormState'
          type="text"
          name="state"
          value={clientInfo.state}
          placeholder="your state"
          onChange={handleChange}
          required
        />
        <h4>What are you looking </h4>
        <h4>for in a kitten?</h4>
        <label htmlFor="clientForm">Budget</label>
        <select name="budget" value={clientInfo.budget} onChange={handleChange} required>
          <option value={''}></option>
          {budgetRanges.map((range, index) => (
            <option key={index} value={range}>{range}</option>
          ))}
        </select>
        <label htmlFor="clientFormGender">Boy or Girl?</label>
        <select id='clientFormGender' name="gender" value={clientInfo.gender} onChange={handleChange} required>
          <option value={''}></option>
          {genderOptions.map((gen, index) => (
            <option key={index} value={gen}>{gen}</option>
          ))}
        </select>
        <label htmlFor="clientFormEars">Fold or Straight</label>
        <select id='clientFormEars' name="ears" value={clientInfo.ears} onChange={handleChange} required>
          <option value={''}></option>
          {earOptions.map((ear, index) => (
            <option key={index} value={ear}>{ear}</option>
          ))}
        </select>
        <label htmlFor="clientFormEyeColor">Eye Color</label>
        <select id="clientFormEyeColor" name="eyeColor" value={clientInfo.color} onChange={handleChange} required>
         <option value={''}></option>
          {eyeColors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}

        </select>
        <label htmlFor="clientFormFurColor">Fur Color</label>
        <select name="furColor" value={clientInfo.furColor} onChange={handleChange} required>
          <option value={''}></option>
          {furColors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
        <label htmlFor="clientFormMif">What Is Most Important</label>
        <select id='clientFormMif' name="mif" value={clientInfo.mif} onChange={handleChange} required>
          <option value={''}></option>
          {mifOptions.map((feature, index) => (
            <option key={index} value={feature}>{feature}</option>
          ))}
        </select>

        <h4>Your Social Media</h4>
        <label htmlFor="clientFormFb">Your Facebook</label>
        <input type="text" name='fB' value={clientInfo.fB} onChange={handleChange} />

        <label htmlFor="clientFormIG">Your Instagram</label>
        <input type="text" name='iG' value={clientInfo.iG} onChange={handleChange} />
        <div className='buttonsWrapper'>
          <input className='buttonStyle2' type="submit" />
          <input className='buttonStyle2' type="reset" />

        </div>
      </form>
    </div>
  )
}

export default ClientQuestionnaire
