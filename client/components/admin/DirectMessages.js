import React, {useState, useEffect, useRef} from 'react'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import ErrorFill from '../ErrorFill'

const DirectMessages = () => {

  const counterRef = useRef(0)
  const [viewDetailed, setViewDetailed] = useState(false)
  const [messages, setMessages] = useState([])

  const [error, setError] = useState('')


  useEffect(() => {
    if(!messages.length && counterRef.current === 0) {
      counterRef.current++
      fetchEffect(
        [setMessages, setError],
        'get',
        `/api/contactRequests`)
      }
    }, [])

  return (
    <>
      {error && <ErrorFill msg={error} />}
      {!error && !messages.length && <h2>No New Messages</h2>}
      {!error && !!messages.length &&
        <>
          <label htmlFor="viewDetailed">See More Details</label>
          <input onChange={() => setViewDetailed(prev => !prev)} type="checkbox" name="viewDetailed" checked={viewDetailed}/>
          <table>
            <thead>
              <tr>
                {viewDetailed &&
                  <>
                    <th>Name</th>
                    <th>Phone</th>
                  </>
                }
                <th>From Email</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {messages.map(message => (
                <tr key={message.id}>
                  {viewDetailed &&
                    <>
                      <td>{message.name}</td>
                      <td>{message.phone}</td>
                    </>
                  }
                  <td>{message.eMail}</td>
                  <td>{message.message}</td>
                  <td>
                    <input type="checkbox" />
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }
    </>
  )
}

export default DirectMessages
