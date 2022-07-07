import React from 'react'
import { Link } from 'react-router-dom'


const AdminBar = () => {

  return (
    <nav>
      <Link to='newUserRequests'>Applications</Link>
      &nbsp;&nbsp;
      <Link to='createKitten'>Add A Kitten</Link>
      &nbsp;&nbsp;
      <Link to='availableKittens'>View/Edit Kittens</Link>
      &nbsp;&nbsp;
      <Link to='createMother' state={{parent:'mother'}}>Add A Dam </Link>
      &nbsp;&nbsp;
      <Link to='createFather' state={{parent:'father'}}>Add A Sire </Link>
      &nbsp;&nbsp;
      <Link to='viewMothers' state={{parent:'mother'}}>View/Edit A Dam </Link>
      &nbsp;&nbsp;
      <Link to='viewFathers' state={{parent:'father'}}>View/Edit A Sire </Link>
      &nbsp;&nbsp;

    </nav>
  )
}

export default AdminBar
