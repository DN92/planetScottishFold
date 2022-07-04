import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import history from '../../history'
import {getWordsFromArrayOfKeys} from '../../../myUtilFuncs'
// import LoadingFill from '../LoadingFill'
import axios from 'axios'
import WrongPath from '../WrongPath'

const RequestReview = () => {

  const arrayFromRequestKeys = [
    'requestedUsername',
    'eMail',
    'firstName',
    'lastName',
    'aboutYou',
    'firstCat',
    'otherPets',
    'city',
    'state',
    'fB',
    'iG',
    'gender',
    'ears',
    'eyeColor',
    'furColor',
    'mif',
    'budget',
    'IPaddress',
  ]

  const {requestId} = useParams()
  const request = history.location.state ? history.location.state.request : false
  //  we have to remove id so it doesn't interfere with db model creation
  delete request['id']
  const [error, setError] = useState(null)
  const [endMessage, setEndMessage] = useState('empty message')
  const [requestComplete, setRequestComplete] = useState(false)
  //  this is a flag for useEffect to delete anon from db after user is made
  const [cleanUpUserCreation, setCleanUpUserCreation] = useState(false)
  // const [requestSuccess, setRequestSuccess] = useState('still working on it')

  const wordsFromKeys = getWordsFromArrayOfKeys(arrayFromRequestKeys)

  useEffect(() => {
    const deleteAnon = async (requestId) => {
      try {
        await axios.delete(`/api/anonVisitors?id=${requestId}`)
      } catch (err) {
        console.log(err)
      }
    }
    if(cleanUpUserCreation) {
      console.log('firing deletion from use effect')
      deleteAnon(requestId)
    }
    setCleanUpUserCreation(false)
  }, [cleanUpUserCreation])

  const handleApprove = async () => {
    try {
      console.log('requesting user creation with request: ', request)
      const {data} = await axios.post('/api/users', request)
      console.log('approval response data: ', data)
      setError(null)
      setRequestComplete(true)
      setEndMessage(`User with email: ${data.eMail} has been successfully added to database.`)
      setCleanUpUserCreation(true)
    } catch (err) {
      setError(err.message)
      setRequestComplete(true)
      setEndMessage('Request rejection failed. Check error messages')
    }
  }

  const handleDeny = async () => {
    try {
      await axios.delete(`/api/anonVisitors?id=${requestId}`)
      setError(null)
      setRequestComplete(true)
      setEndMessage('Application has been successfully rejected.')
    } catch (err) {
      console.log(err)
      setError(err.message)
      setRequestComplete(true)
      setEndMessage('Request rejection failed. Check error messages')
    }
  }

  console.log('checking is request complete:', requestComplete)

  return(
    <>
      {!request &&
        <WrongPath header="No Request Loaded" />
      }
      {!requestComplete && request &&
        <>
          <h2>Awaiting Your Approval</h2>
          <table>
            <thead>
              <tr>
                <td>Field</td>
                <td>Data</td>
              </tr>
            </thead>
            <tbody>
              {arrayFromRequestKeys.map((key, index) => (
                <tr key={key}>
                  <td>{wordsFromKeys[index]}</td>
                  <td>
                    {(key !== 'firstCat')
                    ? request[key]
                    : request[key].toString()
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type='button' onClick={handleApprove}> APPROVE </button> <br />
          <button type='button' onClick={handleDeny}> DENY </button>
          <p>{error}</p>
        </>
      }
      {requestComplete &&
        <>
          <h3>{endMessage}</h3>
          {error && <p>Error Message:: {error}</p>}
          <Link to='/newUserRequests'>Back To Requests</Link>
        </>}
    </>
  )
}

export default RequestReview
