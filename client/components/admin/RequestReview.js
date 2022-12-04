import React, {useState, useEffect} from 'react'
import {useParams, Link, useNavigate, useLocation} from 'react-router-dom'
import {getWordsFromArrayOfKeys} from '../../../myUtilFuncs'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import WrongPath from '../WrongPath'

const RequestReview = () => {

  const navigate = useNavigate()
  const arrayFromRequestKeys = [
    'eMail',
    'phoneNumber',
    'city',
    'state',
    'firstName',
    'lastName',
    'aboutYou',
    'firstCat',
    'otherPets',
    'willBreed',
    'hasAllergy',
    'gender',
    'ears',
    'eyeColor',
    'furColor',
    'mif',
    'budget',
    'foundUsBy',
    'fB',
    'iG',
    'IPaddress',
  ]
  const wordsFromKeys = getWordsFromArrayOfKeys(arrayFromRequestKeys)
  const request = location.state?.request ?? false

  const {requestId} = useParams()
  const [error, setError] = useState(null)
  const [endMessage, setEndMessage] = useState('empty message')
  const [posted, setPosted] = useState(null)


  // todo: take the newly created user's info and send email after that system is set up

  const handleApprove = async () => {
    fetchEffect(
      [setPosted, setError],
      'put',
      `/api/users/handleApplicant?id=${requestId}`,
      {...request, 'applyStatus': 'Approved'}
    )
    setEndMessage('Application has been successfully Approved')
  }

  const handleDeny = async () => {
    fetchEffect(
      [setPosted, setError],
      'put',
      `/api/users/handleApplicant?id=${requestId}`,
      {...request, 'applyStatus': 'Denied'}
    )
    setPosted(true)
    setEndMessage('Application has been successfully Rejected.')
  }

  return(
    <>
      {!request &&
        <WrongPath header="No Request Loaded" />
      }
      {!posted && request &&
        <>
          <h3>Awaiting Your Approval</h3>
          <br />
          <table className='awaiting-approval-table'>
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
                    {(key === 'firstCat') ?
                      (request[key] === true ? 'Yes' : 'No') || 'NULL'
                      :
                      request[key] || 'NULL'
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='buttonsWrapper'>
            <button className='buttonStyle2' type='button' onClick={handleApprove}> APPROVE </button> <br />
            <button className='buttonStyle2' type='button' onClick={handleDeny}> DENY </button>
          </div>
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
