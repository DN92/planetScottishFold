import React, { useState} from 'react'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'
import { fetchEffect } from './axiosHandlers/fetchEffect.js'
import ErrorFill from './ErrorFill'
import { convertToPhoneNumber, veriftyTenDigitPhoneNumber } from '../../myUtilFuncs.js'

// TODO : phone number to 10 and error to screen

const ContactRequestForm = () => {

  const defaultContactRequest = {
    name: '',
    phone: '',
    eMail: '',
    message: '',
  }

  const [contactRequest, setContactRequest] = useState(defaultContactRequest)
  const [newReq, setNewReq] = useState(null)  // object
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [phoneEntryError, setPhoneEntryError] = useState('')

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setContactRequest)
  }

  const handlePhoneNumberChange = (event) => {
    setContactRequest(prev => {
      return {...prev, phone: convertToPhoneNumber(event.target.value)}
    })
  }

  const handleKeyPress = (event) => {
    event.code === 'Enter' && event.target.localName !== 'textarea' && event.preventDefault();
  }

  const handleRedoForm = () => {
    setNewReq(null)
  }

  const handleSubmit1 = (event) => {
    event.preventDefault()
    console.log(veriftyTenDigitPhoneNumber(contactRequest.phone))
    if (veriftyTenDigitPhoneNumber(contactRequest.phone)) {
      setPhoneEntryError('')
      setNewReq(contactRequest)
    } else {
      setPhoneEntryError('Please enter a valid 10 digit Phone Number')
    }
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
          <h2>{newReq ? "Review Your Message" : "Contact Form"}</h2>
          <div className='contact-pre'>
            {error && <ErrorFill msg={error}/>}
            {!newReq && !error &&
              <>
                <div className='contact__msg'>
                  <p>Use this form to send us a direct message.</p>
                  <br />
                  <div className='img-wrapper'>
                    <img src="/fillerPictures/fillerArmsOut.jpg" alt="cat picture filler" />
                  </div>
                </div>
                <div className='contact__formContainer'>
                  <form id="ContactRequest" className='contact__form' onKeyDown={handleKeyPress} onSubmit={handleSubmit1}>
                    <>
                      <label className='required' htmlFor='yourName'>Full Name</label>
                      <input id='contact__yourName' type="text" name="name" placeholder='Name' onChange={handleChange} required/>
                    </>
                      <label htmlFor="contact__phone" className= {phoneEntryError ? 'required red' : 'required'}> {phoneEntryError ? phoneEntryError : 'Phone Number'} </label>
                      <input id='contact__phone' type="text" name="phone" placeholder='Phone number' value={contactRequest.phone} onChange={handlePhoneNumberChange} required/>
                    <>
                      <label htmlFor="contact__eMail" className='required'>Email</label>
                      <input id='contact__eMail' type="email" name="eMail" placeholder='Email' onChange={handleChange} required/>
                    </>
                    <>
                      <label htmlFor="contact__aboutYou" className='required'>Message</label>
                      <textarea id='contact__aboutYou' className='contact__textarea' type="textarea" name="message" cols="40" rows="5" placeholder='Type your message here..' onChange={handleChange} required />
                    </>
                    <input className='buttonStyle2' type="submit" />
                  </form>
                </div>
              </>
            }
            {newReq && !error &&
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
          <p className='contact-post'>Thank You! Your message has been submitted. We will respond as soon as possible.</p>
          <img src="/otherPictures/catTyping.jpg" alt="cat typing on a keyboard, comical" />
        </>
      }
    </>
  )
}

export default ContactRequestForm
