import React, { useState} from 'react'
import {convertToPhoneNumber} from '../../myUtilFuncs.js'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'
import { fetchEffect } from './axiosHandlers/fetchEffect.js'
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
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setContactRequest)
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleRedoForm = (event) => {
    setNewReq({})
  }

  const handleSubmit1 = (event) => {
    event.preventDefault()
    setNewReq(contactRequest)
  }

  const handleSubmit2 = (event) => {
    event.preventDefault()
    fetchEffect(
      [setNewReq, setError],
      'post',
      `api/contactRequests`,
      contactRequest,
    )
    setDone(true)
  }

  return (
    <>
      {!done && !error &&
        <>
          <h2>{Object.keys(newReq).length ? "Review Your Message" : "Contact Form"}</h2>
          <div className='contact-pre'>
            {error && <ErrorFill msg={error}/>}
            {!Object.keys(newReq).length &&
              <>
                <div className='contact__msg'>
                  <p>Use this form to send us a direct message without having to log in</p>
                  <p>Address:</p>
                  <p>We breed in our homes,so we do not share our addresses unless reservation deposit is placed.</p>
                </div>
                <div className='contact__form'>
                  <form id="ContactRequest" onKeyDown={handleKeyPress} onChange={handleChange} onSubmit={handleSubmit1}>
                    <input type="text" name="name" placeholder='Your Name' required/><br />
                    <input type="tel" name="phone" placeholder='Your phone number' /><br />
                    <input type="email" name="eMail" placeholder='Your Email' required/><br />
                    <textarea type="textarea" name="message" cols="40" rows="5" placeholder='Type your message here..' required /><br />
                    <input className='buttonStyle2' type="submit" />
                  </form>
                </div>
              </>
            }
            {!!Object.keys(newReq).length &&
              <div className='contact-post'>
                <p>From: {newReq.name}</p>
                <p>Email: {newReq.eMail}</p>
                <p>Telephone: {newReq.phone}</p>
                <p>Your Message: {newReq.message}</p>
                <div className='buttonsWrapper'>
                  <button className='buttonStyle2' type='button' onClick={handleRedoForm}>Edit Information</button>
                  <button className='buttonStyle2' type='button' onClick={handleSubmit2}>Continue</button>
                </div>
              </div>
            }
          </div>
        </>
      }
      {/* success message */}
      {done &&
        <>
          <p className='contact-post'>Your message has been submitted. We will review it as soon possible. Thanks!</p>
          <img src="/otherPictures/catTyping.jpg" alt="cat typing on a keyboard, comical" />
        </>
      }
    </>
  )
}

export default ContactRequestForm
