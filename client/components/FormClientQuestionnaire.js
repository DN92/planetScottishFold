import React from 'react'
import { useState } from 'react'

const FormClientQuestionnaire = (props) => {

  const [clientInfo, setClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    aboutYou: '',
    firstCat: false,
    otherPets: '',
    city: '',
    state: '',
    fB: '',
    iG: ''
  })

  const [catPref, setCatPref] = useState ({
    gender: '',
    ears: '',
    color: '',
    mif: '',
  })

  const handleClientInfo = (event) => {
    event.persist();
    setClientInfo(
      prevClientInfo => {
        return {...prevClientInfo, [event.target.name]: event.target.value}
      }
    )
    console.log(clientInfo)
  }

  const handleCatPref = (event) => {
    event.persist();
    setCatPref(
      prevCatPref => {
        return {... prevCatPref, [event.target.name]: event.target.value}
      }
    )
    console.log(catPref)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const allInfo = {
      ... clientInfo,
      ... catPref,
    }
    console.log(allInfo)
  }

  return (
    <div>
      <form id="clientQuestionnaire" onSubmit={handleSubmit}>
        <div onChange={handleClientInfo}>
          {/* about customer */}
          <h2>About You</h2>
          {/* client first name */}
          <label htmlFor="firstName">First name:</label><br />
          <input type="text" name="firstName" value={clientInfo.firstName} /><br />
          {/* client last name */}
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" name="lastName" value={clientInfo.lastName} /><br />
          {/* client email */}
          <label htmlFor="eMail">E-Mail</label><br />
          <input type="email" name="email" value={clientInfo.email} /><br />
          {/* client about yourself */}
          <label htmlFor="aboutYou">Tell Us About Yourself</label><br />
          <textarea rows="4" cols="50" name="aboutYou" value={clientInfo.aboutYou} /><br />
          {/* client first time cat owner? */}
          <label htmlFor="firstCat">Will this be your first cat?</label><br />
          <select name="firstCat">
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select> <br />
          {/* client other pets? */}
          <label htmlFor="otherPets">If you own other pets, please list them.</label><br />
          <input type="text" name="otherPets" value={clientInfo.otherPets} />

          <h2>Where are you located</h2>
          {/* client city */}
          <label htmlFor="clientCity">City</label><br />
          <input type="text" name="city" value={clientInfo.city} /><br />
          {/* client state */}
          <label htmlFor="clientState">State</label><br />
          <input type="text" name="state" value={clientInfo.state} /><br />
        </div>

        <div onChange={handleCatPref}>
          <h2>What are your preferences in a kitten?</h2>
          {/* cat gender */}
          <label htmlFor="kittyGender">Gender</label><br />
          <select name="gender">
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> <br />
          {/* cat ears */}
          <label htmlFor="kittyEars">Ears</label><br />
          <select name="ears">
            <option value=""></option>
            <option value="fold">Fold</option>
            <option value="straight">Straight</option>
          </select> <br />
          {/* cat color */}
          <label htmlFor="kittyColor">Color</label><br />
          <input type="text" name="color" value={catPref.color} /><br />
          {/* cat most important feature */}
          <label htmlFor="importantFeature">What is the most import feature you are looking for in your kitten?</label><br />
          <input type="text" name="mif" value={catPref.mif} /><br />
        </div>

        <div onChange={handleClientInfo}>
          <h2>Your FaceBook and/or Instagram</h2>

          <label htmlFor="clientFB">Your FaceBook</label><br />
          <input type="text" name="fB" value={clientInfo.fB} /><br />

          <label htmlFor="clientIG">Your Instagram</label><br />
          <input type="text" name="iG" value={clientInfo.iG} /><br />
        </div>

        <input type="submit" />

      </form>
    </div>
  )
}

export default FormClientQuestionnaire
