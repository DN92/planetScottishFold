import React from 'react'
import { Link } from 'react-router-dom'

const My404 = (props) => {

  return (
    <div>
      <h2>Oops! Something Went Wrong. Sorry about that!</h2>
      <img src="/catPictures/cat404.png" alt="" />
      <Link to="/home"> Click Here To Go Back To Our Home Page</Link>
    </div>
  )

}

export default My404
