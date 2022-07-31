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
    <div className='logout'>
      <h4>You have been Successfully</h4>
        <h4>logged out</h4>
      <div className='logout-img-wrapper'>
        <img src="/catPictures/outsideCat.jpeg" alt="Image of cat outside" />
      </div>
    </div>
  )
}

export default Logout
