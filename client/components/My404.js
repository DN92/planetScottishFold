import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const My404 = () => {
  const navTo = useNavigate()

  return (
    <div>
      <h2>Oops! Something Went Wrong. Sorry about that!</h2>
      <img src="/catPictures/cat404.png" alt="" /> <br />
      <Link to="/home"> Click Here To Go Back To Our Home Page</Link> <br />
      <button onClick={() => { navTo(-1) }} >Or Click Here to go Back</button>
    </div>
  )

}

export default My404
