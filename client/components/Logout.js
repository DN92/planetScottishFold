import React, {useContext, useEffect} from 'react'
import MeContext from '../MeContextPro'
import { Link } from 'react-router-dom'

const Logout = () => {

  const {setUsername, setType, setId} = useContext(MeContext)
  const {username, type, id} = useContext(MeContext)

  useEffect(()=>{
    localStorage.clear()
    setUsername(null)
    setType(null)
    setId(null)
  },[])

  return (
    <div>
      <h2>You have been Successfully logged out</h2>
      <p>username: {username} type {type} id {id}</p>
      <img src="/catPictures/outsideCat.jpeg" alt="Image of cat outside" />
      <Link to='/login'>Log In</Link> <br />
      <Link to='/home'> Back To Homepage</Link>
    </div>
  )
}

export default Logout
