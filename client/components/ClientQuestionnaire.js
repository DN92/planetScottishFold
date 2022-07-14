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
    firstCat: false,
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
      JSON.parse(localStorage.getItem('clientInfo'))
      ? JSON.parse(localStorage.getItem('clientInfo'))
      : defaultClientInfo
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
    <form id="clientQuestionnaire" onSubmit={handleSubmit} onKeyDown={handleKeyPress} onChange={handleChange} onReset={handleReset}
    >
      <h2>About You</h2>
      <label htmlFor="clientFormFName">First Name</label>
      <input  id="clientFormFName"
        type="text"
        name="firstName"
        value={clientInfo.firstName}
        placeholder="First Name"
        required
      /> <br />
      <label htmlFor="clientFormTName">Last Name</label>
      <input id="clientFormTName"
        type="text"
        name="lastName"
        value={clientInfo.lastName}
        placeholder="Last Name"
        required
      /> <br />
      <label htmlFor="clientFormEmail">EMail</label>
      <input id="clientFormEmail"
        type="email"
        name="eMail"
        value={clientInfo.eMail}
        placeholder="E Mail"
        required
      /> <br />
      <label htmlFor="clientFormAboutYou"></label>
      <textarea id='clientFormAboutYou'
        name="aboutYou"
        cols="50"
        rows="5"
        value={clientInfo.aboutYou}
        placeholder='Please tell us a little about yourself.'
        required
      /> <br />
      <label htmlFor="clientFormFirstCat">Will this be your first cat?</label>
      <select id='clientFormFirstCat'
        name="firstCat"
        value={clientInfo.firstCat}
        required>
          <option value={false}>Will this be your first cat?</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
      </select>
      <br />
      <label htmlFor="clientFormOtherPets">Please list out all other pets you own here</label>
      <input id="clientFormOtherPets"
        type="text"
        name="otherPets"
        value={clientInfo.otherPets}
        placeholder='If any, what other pets do you own?'
      />

      <h2>Where are you from?</h2>
      <label htmlFor="clientFormCity">City</label>
      <input id="clientFormCity"
        type="text"
        name="city"
        value={clientInfo.city}
        placeholder="your city"
        required
      />
      <label htmlFor="clientFormState">State</label>
      <input id='clientFormState'
        type="text"
        name="state"
        value={clientInfo.state}
        placeholder="your state"
        required
      />
      <h2>What are you looking for in a kitten?</h2>
      <label htmlFor="clientForm">Budget</label>
      <select name="clientFormBudget" value={clientInfo.budget} required>
        <option value={budgetRanges[0]}>Budget</option>
        {budgetRanges.map((range, index) => (
          <option key={index} value={range}>{range}</option>
        ))}
      </select>
      <label htmlFor="clientFormGender">Boy or Girl?</label>
      <select id='clientFormGender' name="gender" value={clientInfo.gender} required>
        <option value={genderOptions[0]}>Boy or Girl?</option>
        {genderOptions.map((gen, index) => (
          <option key={index} value={gen}>{gen}</option>
        ))}
      </select><br />
      <label htmlFor="clientFormEars">Fold or Straight</label>
      <select id='clientFormEars' name="ears" value={clientInfo.ears} required>
        <option value={earOptions[0]}>Fold or Straight</option>
        {earOptions.map((ear, index) => (
          <option key={index} value={ear}>{ear}</option>
        ))}
      </select><br />
      <label htmlFor="clientFormEyeColor">Eye Color</label>
      <select id="clientFormEyeColor" name="eyeColor" value={clientInfo.color} >
        <option value={eyeColors[0]}>Eye Color</option>
        {eyeColors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
        {/* etc */}
      </select>
      <label htmlFor="clientFormFurColor">Fur Color</label>
      <select name="furColor" value={clientInfo.furColor}>
        <option value={furColors[0]}>Fur Color</option>
        {furColors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select> <br />
      <label htmlFor="clientFormMif">What Is Most Important</label>
      <select id='clientFormMif' name="mif" value={clientInfo.mif}>
        <option value={mifOptions[0]}>Most Important Feature</option>
        {mifOptions.map((feature, index) => (
          <option key={index} value={feature}>{feature}</option>
        ))}
      </select>

      <h2>Your Facebook and/or Instagram</h2>
      <label htmlFor="clientFormFb">Your Facebook</label>
      <input type="text" name='fB' value={clientInfo.fB} />
      <br />
      <label htmlFor="clientFormIG">Your Instagram</label>
      <input type="text" name='iG' value={clientInfo.iG} />
      <br />
      <input type="reset" />
      <input type="submit" />
    </form>
  )
}

export default ClientQuestionnaire
