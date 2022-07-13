import React, { useState, useEffect }from 'react'
import ErrorFill from '../ErrorFill'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import { Link } from 'react-router-dom'

const ViewUsers = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    !users.length && fetchEffect(
      [setUsers, setError],
      'get',
      `/api/users`,
    )
  }, [] )

  useEffect(() => {
    users.length && console.log(users)
  }, [users])

  return (
    <div>
      {error && <ErrorFill msg={error} />}
      {!error && !users.length && <h3>No Members</h3>}
      {!error && users.length &&
        <>
          <h2>Members</h2>
          <table>
            <thead>
              <tr>
                <th>Email</th>
                <th>User Name</th>
                <th>budget</th>
                <th>City and State</th>
                <th>FaceBook</th>
                <th>InstaGram</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.eMail}</td>
                  <td>{user.lastName + ', '}{user.firstName} </td>
                  <td>{user.budget}</td>
                  <td>{user.city + ' '}{user.state}</td>
                  <td>{user.fB}</td>
                  <td>{user.iG}</td>
                  <td>
                    <Link to={`/viewUsers/id=${user.id}`} state={{user: user}}>
                      <button>See More Details</button>
                    </Link>
                  </td>
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
