import React from 'react'
import { Link } from 'react-router-dom'


//  /QConfirmation
const QuestionnaireConfirmation = () => {
  return (
    <div>
      <h3>Thank you for filling out our form</h3>
      <p>We have received your submission and will review it as soon as possible.</p>
      <p>Once approved, you will receive an email with the next steps in the adoption process.</p><br />
      <div>
        <Link to='/home'>Back To Home Page</Link>
      </div>
      <div>
        <Link to='/availableKittens'>Available Kittens</Link>
      </div>
    </div>
  )
}

export default QuestionnaireConfirmation
