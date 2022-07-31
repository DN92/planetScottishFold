import React, {useState, useEffect, useRef} from 'react'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import ErrorFill from '../ErrorFill'

const DirectMessages = () => {

  const counterRef = useRef(0)
  const subClicks = useRef(0)
  const [allMessages, setAllMessages] = useState([])
  const [visibleMessages, setVisibleMessages] = useState([])
  const [viewDetailed, setViewDetailed] = useState(false)
  const [viewRead, setViewRead] = useState(false)
  const [confirmText, setConfirmText] = useState('')  // for submitting changes
  const [error, setError] = useState('')
  const [msgsMemo, setMsgsMemo] = useState({
    markRead: {},
    markDelete: {},
  })

  const handleCheckBox = (event) => {
    const {name, checked} = event.target
    const msgId = event.target.getAttribute('msgid')
    setMsgsMemo(prev => ({
      ...prev, // deal with the nested objs
      [name]: { // name of the key / nestedObj we are targeting
        ...prev[name], // spread the nested obj
        [msgId]: checked // overwrite the nested value (boolean)
      }
    }))
  }

  const handleUndo = (event) => {
    subClicks.current = 0
    setConfirmText('')
  }

  const handleSubmit1 = (event) => {
    event.preventDefault()
    subClicks.current === 0 ?
      setConfirmText('Changes Cannot Be Done. Do you wish to Continue?') :
      fetchEffect(
        [setAllMessages ,setError],
        'put',
        `/api/contactRequests/bulk`,
        msgsMemo
        )
    subClicks.current ++
  }

  useEffect(() => {
    if(!allMessages.length && counterRef.current === 0) {
      fetchEffect(
        [setAllMessages, setError],
        'get',
        `/api/contactRequests`)
      }
      counterRef.current++
    }, [])

  useEffect(() => {
    counterRef.current < 3 &&
    setAllMessages(allMessages.sort((a, b) => {
      return (b.wasRead ? 0 : 1) - (a.wasRead ? 0 : 1)
    }))
  }, [allMessages])

  useEffect(() => {
    setVisibleMessages(allMessages.filter(msg =>
      viewRead ?
        true :
        !msg.wasRead
    ))
    counterRef.current ++
  },[allMessages, viewRead])

  return (
    <>
      {error && <ErrorFill msg={error} />}
      {!error && !visibleMessages.length && <h2>No New Messages</h2>}
      {!error && !!visibleMessages.length &&
        <>
          <label htmlFor="viewDetailed">See More Details</label>
          <input onChange={() => setViewDetailed(prev => !prev)} type="checkbox" name="viewDetailed" checked={viewDetailed}/>
          <label htmlFor="viewRead">View Old Messages</label>
          <input onChange={() => setViewRead(prev => !prev)} type="checkbox" name="viewRead" checked={viewRead}/>
          <table>
            <thead>
              <tr>
                <th>Mark as Read</th>
                <th>Status</th>
                {viewDetailed &&
                  <>
                    <th>Name</th>
                    <th>Phone</th>
                  </>
                }
                <th>From Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
              visibleMessages.map(message => (
                <tr key={message.id}>
                  <td>
                    <input type="checkbox"
                    name='markRead'
                    msgid={`${message.id}`}
                    onChange={handleCheckBox}
                    />
                  </td>
                  <td>{message.wasRead ? 'old' : 'new'}</td>
                  {viewDetailed &&
                    <>
                      <td>{message.name}</td>
                      <td>{message.phone}</td>
                    </>
                  }
                  <td>{message.eMail}</td>
                  <td>{message.message}</td>
                  <td>
                    <input type="checkbox"
                      name='markDelete'
                      msgid={`${message.id}`}
                      onChange={handleCheckBox}
                     />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type='button' onClick={handleSubmit1}>Submit</button>
          {subClicks.current === 1 &&
          <button type='button' onClick={handleUndo}>Undo Submit</button>
          }
          <p>{confirmText}</p>

        </>
      }
    </>
  )
}

export default DirectMessages
