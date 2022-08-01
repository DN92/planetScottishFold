import React from 'react'
import { createContext, useState} from 'react'

//  meContext Provider: A context provider for the current user
// it tells the app who the user is, what type they are, and what to show them

const MeContext = createContext()

export const MeProvider = ({children}) => {

  let psfMe = null
  if (localStorage.hasOwnProperty('autoLogin') && localStorage.hasOwnProperty('psfMe')) {
    psfMe = JSON.parse(localStorage.getItem('psfMe'))
  }

  const [email, setEmail] = useState(psfMe ? psfMe.eMail : null)
  const [type, setType] = useState(psfMe ? psfMe.type : null)
  const [id, setId] = useState(psfMe ? psfMe.id : null)

  return (
    <MeContext.Provider value={{
      email, setEmail,
      type, setType,
      id, setId,
    }}>
      {children}
    </MeContext.Provider>
  )
}

export default MeContext
