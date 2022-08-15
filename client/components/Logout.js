import React, {useContext, useEffect} from 'react'
import MeContext from '../MeContextPro'
import { Link } from 'react-router-dom'

const Logout = () => {

  const {setEmail, setType, setId} = useContext(MeContext)

  useEffect(()=>{
    localStorage.clear()
    setEmail(null)
    setType(null)
    setId(null)
  },[])

  return (
    <div className='logout'>
      <h4>You have been Successfully</h4>
        <h4>logged out</h4>
      <div className='logout-img-wrapper'>
        <img src="/fillerPictures/fillerKittenStanding.jpg" alt="Image of cat outside" />
      </div>
    </div>
  )
}

export default Logout
