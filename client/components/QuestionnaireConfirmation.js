import React, { useState, useEffect } from 'react'
import history from '../history'
import { Link } from 'react-router-dom'


//  /QConfirmation
const QuestionnaireConfirmation = () => {
  return (
    <div>
      <h3>Thank you for filling out our form</h3>
      <p>We have received your submission and will review it as soon as possible.</p>
      <p>Once approved, you will receive an email with Login and Password information which can be used to login.</p><br />
      <Link to='/home'>Back To Home Page</Link>
    </div>
  )


}

export default QuestionnaireConfirmation
