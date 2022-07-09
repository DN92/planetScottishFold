import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import ErrorFill from '../ErrorFill'

const DirectMessages = () => {

  const [viewDetailed, setViewDetailed] = useState(false)
  const [messages, setMessages] = useState([])

  const [error, setError] = useState('')


  useEffect(() => {
    !messages.length && fetchEffect([])
  }, [setMessages, setError],
  'get'
  `api/contactRequests`
  )

  return (
    <>
      {error && <ErrorFill msg={error} />}
      {!error && !messages.length && <h2>No New Messages</h2>}
      {!error && messages.length &&
        <>
          <input onChange={setViewDetailed(prev => !prev)} type="checkbox" name="viewDetailed" checked={viewDetailed}/>

        </>
      }
    </>
  )
}

export default DirectMessages
