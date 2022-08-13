import React, {useState, useEffect, useContext} from 'react'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'

const UserDashboard = () => {

  const { type } = useContext(MeContext)
  const isPrivilegedUser = isPrivileged(type)


  return (
    <div className='user-dash-container'>
      <div className='user-dash__info'>
        {isPrivilegedUser &&
        <>
          <p>Access Level: {}</p>
        </>
        }
      </div>
    </div>
  )
}

export default UserDashboard
