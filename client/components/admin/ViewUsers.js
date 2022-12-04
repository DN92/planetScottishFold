import React, { useState, useEffect }from 'react'
import ErrorFill from '../ErrorFill'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import { Link, useNavigate } from 'react-router-dom'

const ViewUsers = () => {

  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  const handleSeeMoreDetails = (event, user) => {
    navigate(`/viewUsers/id=${user.id}`, {state: {user: user}})
  }

  useEffect(() => {
    !users.length && fetchEffect(
      [setUsers, setError],
      'get',
      `/api/users`,
    )
  }, [] )

  return (
    <div>
      {error && <ErrorFill msg={error} />}
      {!error && !users.length && <h3>No Members</h3>}
      {!error && users.length &&
        <>
          <h2>Members</h2>
          <table className='members-table'>
            <thead>
              <tr className='table-head-shader'>
                <th className='opacity-zero'>Select</th>
                <th className='opacity-zero'>gutter</th>
                <th>Email</th>
                <th>Name</th>
                <th>budget</th>
                <th>City and State</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <button className="buttonStyle1" onClick={(event, user)=>{handleSeeMoreDetails(event, user)
                    }}>See More Details</button>
                  </td>
                  <td className='opacity-zero'>gutter</td>
                  <td>{user.eMail  || 'NULL'}</td>
                  <td>{(user.lastName || user.firstName) ?
                    (user.lastName + ', ' + user.firstName)
                    :
                    'NULL'
                  } </td>
                  <td>{user.budget  || 'NULL'}</td>
                  <td>{(user.city || user.state) ?
                    (user.city + ' ' + user.state)
                    :
                    'NULL'
                  }</td>
                  <td>{user.type}</td>
                  <td>{user.applyStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }
    </div>
  )
}

export default ViewUsers
