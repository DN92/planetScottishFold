import React, {useState, useEffect} from 'react'
import history from '../../history'
import ErrorFill from '../ErrorFill'
import { fetchEffect } from '../axiosHandlers/fetchEffect'
import { Link, useParams } from 'react-router-dom'

const UserLongView = () => {

  const {id} = useParams()
  const [user, setUser] = useState(history.location.state?.user ?? {})
  const [error, setError] = useState('')


      //  if we don't have a USER from history, fetch one by id.
    //  no params and no history should result in a local 404
  useEffect(() => {
    !user && id && fetchEffect(
      [setUser, setError],
      'get',
      `/api/users?id=${id}`)
  }, [])

  return (
    <div key={id}>
      {error && <ErrorFill msg={error} />}
      {!error && user &&
      <>
        <div>
          <h3>{user.type} User</h3>
          <span>Email: {user.eMail}</span> <br />
          <span>Name: {user.lastName + ', ' + user.firstName}</span> <br />
          <span>Budget: {user.budget}</span> <br />
          <span>Location: {user.city + user.state}</span> <br />
          <span>FaceBook: {user.fB}</span> <br />
          <span>InstaGram: {user.iG}</span> <br />
          <span>First Cat?: {user.firstCat?.toString() ?? ""}</span> <br />
          <span>Other Pets: {user.otherPets}</span> <br />
          <span>About Me: {user.aboutYou}</span> <br />
          <br />
          {user.IPaddress && <span>{user.IPaddress}</span> }
          <hr />
          <h4>Looking For</h4>
          <span>Gender: {user.gender}</span> <br />
          <span>Ears: {user.ears}</span> <br />
          <span>Fur: {user.furColor}</span> <br />
          <span>Eyes: {user.eyeColor}</span> <br />
          <span>Most Important Feature: {user.mif}</span> <br />
        </div>
        <Link to={'/viewUsers'}>
          <button>Back To Members</button>
        </Link>
        <Link to='/home'>
          <button>Back to Home</button>
        </Link>
      </>
      }
      {!error && !user &&
        <My404 />
      }
    </div>
  )
}

export default UserLongView
