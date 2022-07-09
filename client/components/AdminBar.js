import React from 'react'
import { Link } from 'react-router-dom'


const AdminBar = () => {

  return (
    <nav>
      <Link to='newUserRequests'>Applications</Link>
      &nbsp;&nbsp;
      <Link to='createKitten'>Add A Kitten</Link>
      &nbsp;&nbsp;
      <Link to='availableKittens' >View/Edit Kittens</Link>
      &nbsp;&nbsp;
      <Link to='createCat/mother' >Add A Dam </Link>
      &nbsp;&nbsp;
      <Link to='createCat/father' >Add A Sire </Link>
      &nbsp;&nbsp;
      <Link to='viewCats/mother' >View/Edit A Dam </Link>
      &nbsp;&nbsp;
      <Link to='viewCats/father' >View/Edit A Sire </Link>
      &nbsp;&nbsp;
      <Link to='directMessages' >Direct Messages </Link>
      &nbsp;&nbsp;

    </nav>
  )
}

export default AdminBar
