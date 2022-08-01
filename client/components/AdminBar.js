import React from 'react'
import { Link } from 'react-router-dom'


const AdminBar = ({setViewNav}) => {

  return (
    <nav className='navBar'>
      <Link to='/home'>Home</Link>
      <Link to='newUserRequests'>Applications</Link>
      <Link to='viewUsers'>All Members</Link>
      <Link to='createKitten'>Add A Kitten</Link>
      <Link to='availableKittens' >View/Edit Kittens</Link>
      <Link to='createCat/mother' >Add A Dam </Link>
      <Link to='createCat/father' >Add A Sire </Link>
      <Link to='viewCats/mother' >View/Edit A Dam </Link>
      <Link to='viewCats/father' >View/Edit A Sire </Link>
      <Link to='directMessages' >Direct Messages </Link>
    </nav>
  )
}

export default AdminBar
