  import React, {useState, useEffect} from "react";
import history from "../history";
import ErrorFill from './ErrorFill'
import { fetchEffect } from "./axiosHandlers/fetchEffect";
import { getUserIP } from '../../myUtilFuncs.js'

//  this component is accessed through ClientQuestionnaire's onSubmit through the history library. ::  history.push('confirmClientQuestionnaire)

// props are pushed through local storage since we are using storage anyway, to make sure client doesn't have to reenter the same information ad nauseam
const ConfirmClientQuestionnaire = () => {

  const [infoPosted, setInfoPosted] = useState(false)
  const [error, setError] = useState('')
  const [clientInfo, setClientInfo] = useState(history.location?.state?.clientInfo)

  const handleGoBack = () => {
    history.back()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    clientInfo.IPaddress = await getUserIP()

    fetchEffect(
      [setInfoPosted,setError],
      'post',
      `/api/users`,
      clientInfo
    )
  }

  useEffect(()=>{
    if(infoPosted) {
      localStorage.removeItem('clientInfo')
      history.replace('/QConfirmation')
    }
  },[infoPosted])

  return (
    <>
    {clientInfo &&
      <div className="client-confirmation" >
        <h4>Please Review Your Answers Before Submitting</h4>
        <br /><br />
        <div className="clientInfo-wrapper">
          <ul className="clientInfo-questions">
            <li>E-mail: </li>
            <li>First Name: </li>
            <li>Last Name:</li>
            <li>Phone Number:</li>
            <li>Plan to Breed:</li>
            <li>Allergies:</li>
            <li>This Your First Cat:</li>
            <li>Other Pets:</li>
            <li>City:</li>
            <li>State:</li>
            <li>Kitten's Gender:</li>
            <li>Ears:</li>
            <li>Eye Colors</li>
            <li>Important Feature:</li>
            <li>Price Range:</li>
            <li>Found Us By:</li>
            <li>Facebook:</li>
            <li>Instagram:</li>
          </ul>
          <div className="clientInfo-answers">
            <span>{clientInfo.eMail}</span><br />
            <span>{clientInfo.firstName}</span><br />
            <span>{clientInfo.lastName}</span><br />
            <span>{clientInfo.phoneNumber}</span><br />
            <span>{clientInfo.willBreed}</span><br />
            <span>{clientInfo.hasAllergies}</span><br />
            <span>{clientInfo.firstCat}</span><br />
            <span>{clientInfo.otherPets}</span><br />
            <span>{clientInfo.city}</span><br />
            <span>{clientInfo.state}</span><br />
            <span>{clientInfo.gender}</span><br />
            <span>{clientInfo.ears}</span><br />
            <span>{clientInfo.eyeColor} </span><br />
            <span>{clientInfo.mif}</span><br />
            <span>{clientInfo.budget}</span><br />
            <span>{clientInfo.foundUsBy}</span><br />
            <span>{clientInfo.fB}</span><br />
            <span>{clientInfo.iG}</span><br />
          </div>
        </div>
        <div className="buttonsWrapper confirmation-buttons">
          <button className="buttonStyle2" type="button" onClick={handleGoBack}> Edit My Answers </button>
          <button className="buttonStyle2" type="submit" onClick={handleSubmit}> Confirm </button>

        </div>
      </div>}
    {!clientInfo &&
      <div>
        OOPS! Something went wrong!
      </div>}
    {error && <ErrorFill msg={error} />}
    </>
  )
}

export default ConfirmClientQuestionnaire
