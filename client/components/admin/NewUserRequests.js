import React, {useState, useEffect} from 'react'
import UseReqTableRow from './UseReqTableRow'
import ErrorFill from '../ErrorFill'
import LoadingFill from '../LoadingFill'
import axios from 'axios'

const NewUserRequests = () => {

const [requests, setRequests] = useState([])
const [error, setError] = useState('')
const [loading, setLoading] = useState(true)

useEffect(()=>{
  console.log('reloading the page and error is: ', error)
  const fetchRequests = async () => {
    try{
      const {data} = await axios.get('/api/anonVisitors')
      setRequests(data)
    } catch (err) {
      setError(err.message)
    }
  }
  fetchRequests()
}, [])

useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
    setError('This is only a Test Meow')
  },2000)
}, [setRequests])

return (
  <>
    {error && <ErrorFill msg={error} />}
    {!error && loading && <LoadingFill />}
    {!error && !loading &&
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
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
        {requests.map(request => (
          <UseReqTableRow key={request.id} request={request} />
        ))}
        </tbody>
      </table>
    }
  </>
)}

export default NewUserRequests
