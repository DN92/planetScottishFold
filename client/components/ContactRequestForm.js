import React, { useState } from 'react'
import {resetForm, convertToPhoneNumber} from '../../myUtilFuncs.js'


const ContactRequestForm = () => {

  const defaultContactRequest = {
    name: '',
    phone: '',
    email: '',
    message: '',
  }

  const [contactRequest, setContactRequest] = useState(defaultContactRequest)

  const handleChange = (event) => {
    event.persist()
    if (event.target.name === "phone") {
      event.target.value = convertToPhoneNumber(event.target.value)
    }
    setContactRequest(prevContactRequest => {
      return {...prevContactRequest, [event.target.name]: event.target.value}
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    resetForm(event)
    setContactRequest(defaultContactRequest)
  }

  return (
    <form id="ContactRequest" onChange={handleChange} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder='Your Name' required/><br />
      <input type="tel" name="phone" placeholder='Your phone number' /><br />
      <input type="email" name="eMail" placeholder='Your Email'/><br />
      <input type="textarea" name="message" placeholder='Type your message here..' required /><br />
      <input type="submit" />
    </form>
  )
}

export default ContactRequestForm
