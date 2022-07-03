import React from 'react'
import { createContext, useState} from 'react'

const MeContext = createContext()

export const MeProvider = ({children}) => {
  const [username, setUsername] = useState('BoB!')
  const [type, setType] = useState('guest')
  const [id, setId] = useState(null)


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
