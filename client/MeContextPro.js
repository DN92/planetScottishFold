import React from 'react'
import { createContext, useState} from 'react'
import axios from 'axios'

const MeContext = createContext()

export const MeProvider = ({children}) => {
  const [username, setUsername] = useState('bob')
  const [type, setType] = useState('guest')
  const [id, setId] = useState('userId')


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
