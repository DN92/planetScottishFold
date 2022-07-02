import React, {useState, useEffect} from 'react'

const UseReqTableRow = (props) => {

  const defaultUser = {
    username: 'This is the Default State',
    eMail: '324@gmail.com',
    firstName: 'firstName',
    lastName: 'lastName',
    aboutYou: 'About Me',
    firstCat: true,
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

  return (
    <tr>
      <td>{user.requestedUsername}</td>
      <td>{user.eMail}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.aboutYou}</td>
      <td>{user.firstCat.toString()}</td>
      <td>{user.otherPets}</td>
      <td>{user.city}</td>
      <td>{user.state}</td>
      <td>{user.fB}</td>
      <td>{user.iG}</td>
      <td>{user.gender}</td>
      <td>{user.ears}</td>
      <td>{user.eyeColor}</td>
      <td>{user.furColor}</td>
      <td>{user.mif}</td>
      <td>{user.budget}</td>
      <td>{user.IPaddress}</td>
    </tr>
  )
}

export default UseReqTableRow
