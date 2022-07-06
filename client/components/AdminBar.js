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
      <Link to='createMother'>Add A Mother </Link>
      &nbsp;&nbsp;
      <Link to='editMother'>Edit A Mother </Link>

    </nav>
  )
}

export default AdminBar
