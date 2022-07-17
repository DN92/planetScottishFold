import React, {useState, useEffect} from "react";
import history from "../history";
import { fetchEffect } from "./axiosHandlers/fetchEffect";
import { getUserIP } from '../../myUtilFuncs.js'

//  this component is accessed through ClientQuestionnaire's onSubmit through the history library. ::  history.push('confirmClientQuestionnaire)

// props are pushed through local storage since we are using storage anyway, to make sure client doesn't have to reenter the same information ad nauseam
const ConfirmClientQuestionnaire = () => {

  const [infoPosted, setInfoPosted] = useState(false)
  const [error, setError] = useState('')

  const clientInfoFromStorage = JSON.parse(localStorage.getItem('clientInfo'))
  if(clientInfoFromStorage) {
    Object.keys(clientInfoFromStorage).forEach(key => {

        if (clientInfoFromStorage[key] === 'true') {
          clientInfoFromStorage[key] = true
        }
        if (clientInfoFromStorage[key] === 'false') {
          clientInfoFromStorage[key] = false

      }
    })
  }
  const handleGoBack = () => {
    history.back()
  }

  const [clientInfo, setClientInfo] = useState(clientInfoFromStorage)

  useEffect(() => {
    return () => {
    localStorage.removeItem('clientInfo')
  }
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault()
    clientInfo.IPaddress = await getUserIP()

    fetchEffect(
      [setInfoPosted,setError],
      'put',
      `/api/anonVisitors`,
      clientInfo
    )
  }

  useEffect(()=>{
    if(infoPosted) {
      localStorage.removeItem('clientInfo')
      history.push('QConfirmation')
    }
  },[infoPosted])

  return (
    <>
    {clientInfo &&
      <div >
        <h2>Please Review Your Answers Before Submitting</h2>
        <h3>Your Information</h3>
        <ul className="clientInfoQuestions">
          <li>First Name: </li>
          <li>Last Name: </li>
          <li>eMail: </li>
          <li>About You: </li>
          <li>Is this your first cat?: </li>
          <li>Other pets: </li>
          <li>Budget: </li>
          <li>City: </li>
          <li>State: </li>
          <li>FaceBook: </li>
          <li>InstaGram: </li>
        </ul>
        <h3>What you're looking for in a cat.</h3>
        <ul className="clientInfoQuestions">
          <li>Gender: </li>
          <li>Fold or Straight?: </li>
          <li>Color: </li>
          <li>Most Important Feature: </li>
        </ul>
        <ul className="clientInfoAnswers">
          <li>{clientInfo.firstName}</li>
          <li>{clientInfo.lastName}</li>
          <li>{clientInfo.email}</li>
          <li>{clientInfo.aboutYou}</li>
          <li>{clientInfo.firstCat.toString()}</li>
          <li>{clientInfo.otherPets}</li>
          <li>{clientInfo.budget}</li>
          <li>{clientInfo.city}</li>
          <li>{clientInfo.state}</li>
          <li>{clientInfo.fB}</li>
          <li>{clientInfo.iG}</li>
          <li>{clientInfo.gender}</li>
          <li>{clientInfo.ears}</li>
          <li>{clientInfo.color}</li>
          <li>{clientInfo.mif}</li>
        </ul>
        <button type="button" onClick={handleGoBack}> Edit My Answers </button>
        <button type="submit" onClick={handleSubmit}> Confirm </button>
      </div>}
    {!clientInfo &&
      <div>
        OOPS! Something went wrong!
      </div>}
    </>
  )
}

export default ConfirmClientQuestionnaire
