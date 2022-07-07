import React, { useState, useEffect } from 'react'
import history from '../history'
import {furColors, eyeColors} from "../../myModelsConfig"
import handleFormChange from '../customHandlers/handleFormChange'

const ClientQuestionnaire = () => {

  const defaultClientInfo = {
    username: '',
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
      {/* client desired Username */}
      <input type="text" name='username' value={clientInfo.username} placeholder="Desired username" /> <br />
      {/* client first name */}
      <input  id="addFirstName" type="text" name="firstName"  value={clientInfo.firstName} placeholder="First Name" required/>
      <br />
      {/* client last name */}
      <input id="lastName" type="text" name="lastName" value={clientInfo.lastName} placeholder="Last Name" required/>
      <br />
      {/* client E mail */}
      <input id="clientEmail" type="email" name="eMail" value={clientInfo.eMail} placeholder="E Mail" required/>
      <br />
      {/* client About you */}
      <textarea name="aboutYou" id="" cols="50" rows="5" value={clientInfo.aboutYou} placeholder='Please tell us a little about yourself.' required></textarea>
      <br />
      <label htmlFor="firstCat">Will this be your first cat?</label>
      <br />
      <select name="firstCat" value={clientInfo.firstCat} required>
        <option value={false}>Will this be your first cat?</option>
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
      <br />
      <input type="text" name="otherPets" value={clientInfo.otherPets} placeholder='If any, what other pets do you own?' />
      <h2>Where are you from?</h2>
      <input type="text" name="city" value={clientInfo.city} placeholder="your city" required />
      <input type="text" name="state" value={clientInfo.state} placeholder="your state" required />
      <h2>What are you looking for in a kitten?</h2>
      <select name="gender" value={clientInfo.gender} required>
        <option value="">Boy or Girl?</option>
        <option value="boy">Boy</option>
        <option value="girl">Girl</option>
      </select>
      <br />
      <select name="ears" value={clientInfo.ears} required>
        <option value="">Fold or Straight</option>
        <option value="fold">Fold</option>
        <option value="straight">Straight</option>
        <option value="noPref">No Preference</option>
      </select>
      <br />
      <select name="eyeColor" value={clientInfo.color} >
        <option value="">Eye Color</option>
        {eyeColors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
        <option value="noPref">No Preference</option>
        {/* etc */}
      </select>
      <select name="furColor" value={clientInfo.furColor}>
        <option value="">Fur Color</option>
        {furColors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
        <option value="noPref">No Preference</option>
      </select>
      <br />
      <input type="text" name="mif" value={clientInfo.mif} placeholder='What feature is most important to you?' />
      <br />
      <h2>Your Facebook and/or Instagram</h2>
      <input type="text" name='fB' value={clientInfo.fB} />
      <br />
      <input type="text" name='iG' value={clientInfo.iG} />
      <br />
      <select name="budget" value={clientInfo.budget} required>
        <option value="any">Budget</option>
        <option value="lessThan1500">Less than $1500</option>
        <option value="1500to2000">$1500 to $2000</option>
        <option value="2000to2500">$2000 to $2500</option>
        <option value="over2500">$2500 and over</option>
        <option value="any">Any</option>
      </select>
      {/* <input type="reset" /> */}
      <input type="reset" />
      <input type="submit" />
    </form>
  )
}

export default ClientQuestionnaire
