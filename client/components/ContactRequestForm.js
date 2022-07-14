import React, { useState, useEffect } from 'react'
import {resetForm, convertToPhoneNumber} from '../../myUtilFuncs.js'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'
import { fetchEffect } from './axiosHandlers/fetchEffect.js'
import history from '../history'
import ErrorFill from './ErrorFill'


const ContactRequestForm = () => {

  const defaultContactRequest = {
    name: '',
    phone: '',
    eMail: '',
    message: '',
  }

  const [contactRequest, setContactRequest] = useState(defaultContactRequest)
  const [newReq, setNewReq] = useState({})
  const [error, setError] = useState('')
  const [endFlag, setEndFlag] = useState(false)

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setContactRequest)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleSubmit1 = (event) => {
    event.preventDefault()
    setNewReq(contactRequest)
  }

  const handleRedo = (event) => {
    setNewReq({})
  }

  const handleSubmit2 = (event) => {
    event.preventDefault()
    fetchEffect(
      [setNewReq, setError],
      'post',
      `api/contactRequests`,
      contactRequest,
    )
    setEndFlag(prev => !prev)
  }

  useEffect(() => {
    endFlag && !error && history.push('/home')
  },[endFlag])

  return (
    <>
      {error && <ErrorFill msg={error}/>}
      {!Object.keys(newReq).length && !error &&
        <>
          <h2>Contact Form</h2>
          <h4>Use this form to send us a direct message without having to log in</h4>
          <p>Please feel free to contact via Facebook or Instagram page for a faster response.</p>
          <p>Address:</p>
          <p>We breed in our homes,so we do not share our addresses unless reservation deposit is placed.</p>
          <p>Note:</p>
          <p>If you reached out via IG or FB, you don't need to fill this form out.</p>
          <form id="ContactRequest" onKeyDown={handleKeyPress} onChange={handleChange} onSubmit={handleSubmit1}>
            <input type="text" name="name" placeholder='Your Name' required/><br />
            <input type="tel" name="phone" placeholder='Your phone number' /><br />
            <input type="email" name="eMail" placeholder='Your Email' required/><br />
            <textarea type="textarea" name="message" cols="50" rows="5" placeholder='Type your message here..' required /><br />
            <input type="submit" />
          </form>
        </>
      }
      {!!Object.keys(newReq).length && !error &&
        <>
          <h2>Review Your Message</h2><br />
          <span>From: {newReq.name}</span><br />
          <span>Email: {newReq.eMail}</span><br />
          <span>Telephone: {newReq.phone}</span><br />
          <span>Your Message:</span> <br />
          <p>{newReq.message}</p>
          <button type='button' onClick={handleRedo}>Edit Information</button>
          <button type='button' onClick={handleSubmit2}>Continue</button>
        </>
      }
    </>
  )
}

export default ContactRequestForm
