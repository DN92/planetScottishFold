import React, {useState} from 'react'
import history from '../../history'

const UseReqTableRow = (props) => {

  const defaultUser = {
    eMail: 'defaultUser@gmail.com',
    firstName: 'firstName',
    lastName: 'lastName',
    aboutYou: 'About Me',
    firstCat: 'firstCat',
    otherPets: 'otherPets',
    city: 'cartown',
    state: 'downTown',
    fB: 'fb',
    iG: 'ig',
    gender: 'pp',
    ears: 'de',
    eyeColor: 'fwnlf',
    furColor: 'furry',
    mif: 'milf',
    budget: 'budget',
    IPaddress: '123.43.53.65',
    hasBeenReviewedByAdmin: true,
  }

  const [user, setUser] = useState(props.request ? props.request : defaultUser)

  const handleSelectRequest = (event) => {
    history.push(`newUserRequests/${props.id}`, {
      request: props.request
    })
  }

  return (
    <tr >
      <td className='users-table__view-button-wrapper' onClick={handleSelectRequest}><button className='users-table__view-button buttonStyle1'>VIEW</button></td>
      <td className='opacity-zero'>gutter</td>
      <td>{user.eMail || 'NULL'}</td>
      <td>{user.firstName || 'NULL'}</td>
      <td>{user.lastName || 'NULL'}</td>
      <td>{user.phoneNumber || 'NULL'}</td>
      <td>{user.firstCat?.toString() || 'NULL'}</td>
      <td>{user.otherPets || 'NULL'}</td>
      <td>{user.city || 'NULL'}</td>
      <td>{user.state || 'NULL'}</td>
      <td>{user.fB || 'NULL'}</td>
      <td>{user.iG || 'NULL'}</td>
      <td>{user.gender || 'NULL'}</td>
      <td>{user.ears || 'NULL'}</td>
      <td>{user.eyeColor || 'NULL'}</td>
      <td>{user.mif || 'NULL'}</td>
      <td>{user.budget || 'NULL'}</td>
      <td>{user.willBreed || 'NULL'}</td>
      <td>{user.hasAllergies || 'NULL'}</td>
      <td>{user.IPaddress || 'NULL'}</td>
      <td>{user.applyStatus || 'NULL'}</td>
    </tr>

  )
}

export default UseReqTableRow
