import React, { useState, useEffect } from 'react'
import history from '../history'
import { Link } from 'react-router-dom'


//  /QConfirmation
const QuestionnaireConfirmation = () => {
  return (
    <div>
      <h2>Thank you filling out our form</h2>
      <p>We have received your submission and will review it as soon as possible.</p>
      <p>Once approved, you will receive and email with Login and Password information and can use those to login and get more information about our kittens.</p>
      <Link to='/home'>Back To Home Page</Link>
    </div>
  )


}

export default QuestionnaireConfirmation
