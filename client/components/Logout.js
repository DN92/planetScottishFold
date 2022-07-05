import React, {useContext} from 'react'
import MeContext from '../MeContextPro'
import { Link } from 'react-router-dom'

const Logout = () => {
  localStorage.removeItem('psfMe')
  const {setUsername, setType, setId} = useContext(MeContext)
  setUsername(null)
  setType('guest')
  setId(null)

  return (
    <div>
      <h2>You have been Successfully logged out</h2>
      <img src="/catPictures/outsideCat.jpeg" alt="Image of cat outside" />
      <Link to='/login'>Log In</Link>
      <Link to='/home'> Back To Homepage</Link>
    </div>
  )
}

export default Logout
