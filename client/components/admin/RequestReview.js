import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import history from '../../history'
import {getWordsFromArrayOfKeys} from '../../../myUtilFuncs'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
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
  const wordsFromKeys = getWordsFromArrayOfKeys(arrayFromRequestKeys)
  const request = history.location.state ?
    history.location.state.request :
    false

  const {requestId} = useParams()
  const [error, setError] = useState(null)
  const [endMessage, setEndMessage] = useState('empty message')
  const [posted, setPosted] = useState(null)
  const [deleted, setDeleted] = useState(false)


  // todo: take the newly created user's info and send email after that system is set up

  const handleApprove = async () => {
    fetchEffect(
      [setPosted, setError],
      'post',
      '/api/users/anonToUser',
      request
    )
    setEndMessage('Application Approved')
  }

  const handleDeny = async () => {
    fetchEffect(
      [,setError],
      'delete',
      `/api/users?id=${requestId}`
    )
    setDeleted(true)
    setPosted(true)
    setEndMessage('Application has been successfully rejected.')
  }

  useEffect(() => {
    if(posted && !deleted) {
      fetchEffect(
        [,setError],
        'delete',
        `/api/users?id=${requestId}`
      )
    }
  }, [posted])

  return(
    <>
      {!request &&
        <WrongPath header="No Request Loaded" />
      }
      {!posted && request &&
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
      {posted &&
        <>
          <h3>{! error && endMessage}</h3>
          {error && <p>Error Message:: {error}</p>}
          <Link to='/newUserRequests'>Back To Requests</Link>
        </>}
    </>
  )
}

export default RequestReview
