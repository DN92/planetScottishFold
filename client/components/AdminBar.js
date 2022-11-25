import React from 'react'
import { Link } from 'react-router-dom'


const AdminBar = ({setViewNav}) => {

  return (
    <nav className='navBar'>
      {/* <Link to='directMessages' >Messages </Link> */}
      <Link to='imageDash'>ImageDash</Link>
      <Link to='newUserRequests'>Applications</Link>
      <Link to='viewUsers'>All Members</Link>
      <Link to='createKitten'>Add A Kitten</Link>
      <Link to='createCat/mother' >Add A Dam </Link>
      <Link to='createCat/father' >Add A Sire </Link>
      <Link to='availableKittens' >Edit Kittens</Link>
      <Link to='viewCats/mother' >Edit A Dam </Link>
      <Link to='viewCats/father' >Edit A Sire </Link>
    </nav>
  )
}

export default AdminBar
