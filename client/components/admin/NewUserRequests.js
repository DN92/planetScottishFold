import React, {useState, useEffect} from 'react'
import UseReqTableRow from './UseReqTableRow'
import ErrorFill from '../ErrorFill'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import { Link } from 'react-router-dom'

const NewUserRequests = () => {

const [requests, setRequests] = useState([])
const [error, setError] = useState('')



useEffect(()=>{
  fetchEffect(
    [setRequests, setError],
    'get',
    `/api/users`
  )
}, [])

return (
  <>
    {error && <ErrorFill msg={error} />}
    {! error && !requests.length && <h3>No New Requests</h3>}
    {!error && requests.length &&
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>E Mail</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>About You</th>
            <th>First Cat?</th>
            <th>Other Pets</th>
            <th>City</th>
            <th>State</th>
            <th>FaceBook</th>
            <th>InstaGram</th>
            <th>Wants Gender</th>
            <th>Wants Ears</th>
            <th>Wants Eyes</th>
            <th>Wants Fur </th>
            <th>Most Important </th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody >
        {requests.map(request => (
          <UseReqTableRow key={request.id} id={request.id} request={request} />
        ))}
        </tbody>
      </table>
    }
    <Link to='/home'>
          <button>Back to Home</button>
        </Link>
  </>
)}

export default NewUserRequests
