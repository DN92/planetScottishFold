import React from 'react'
import { createContext, useState} from 'react'

const MeContext = createContext()

export const MeProvider = ({children}) => {

  let psfMe = null
  if (localStorage.hasOwnProperty('autoLogin') && localStorage.hasOwnProperty('psfMe')) {
    psfMe = JSON.parse(localStorage.getItem('psfMe'))
  }

  const [username, setUsername] = useState(psfMe ? psfMe.username : null)
  const [type, setType] = useState(psfMe ? psfMe.type : null)
  const [id, setId] = useState(psfMe ? psfMe.id : null)

  return (
    <MeContext.Provider value={{
      username, setUsername,
      type, setType,
      id, setId,
      }}>
    {children}
    </MeContext.Provider>
  )
}

export default MeContext
