import React, {useState, useEffect} from 'react'
import UseReqTableRow from './UseReqTableRow'
import ErrorFill from '../ErrorFill'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import { Link } from 'react-router-dom'

// /newuserRequests
const NewUserRequests = () => {

const [requests, setRequests] = useState([])
const [error, setError] = useState('')


useEffect(()=>{
  !requests.length && fetchEffect(
    [setRequests, setError],
    'get',
    `/api/users/pending`
  )
}, [])

return (
  <>
    {error && <ErrorFill msg={error} />}
    {! error && !requests.length && <h3>No New Requests</h3>}
    {!error && !!requests.length &&
      <table className='users-table'>
        <thead className='users-table__head'>
          <tr className='table-head-shader'>
            <th className='opacity-zero'>Select</th>
            <th className='opacity-zero'>gutter</th>
            <th>E Mail</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>First Cat?</th>
            <th>Other Pets</th>
            <th>City</th>
            <th>State</th>
            <th>FaceBook</th>
            <th>InstaGram</th>
            <th>Wants Gender</th>
            <th>Wants Ears</th>
            <th>Wants Eyes</th>
            <th>Most Important </th>
            <th>Budget</th>
            <th>Will Breed</th>
            <th>hasAllergies</th>
            <th>IP Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='user-table__body'>
        {requests.map(request => (
          <UseReqTableRow key={request.id} id={request.id} request={request} />
        ))}
        </tbody>
      </table>
    }
  </>
)}

export default NewUserRequests
