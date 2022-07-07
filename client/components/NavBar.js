import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <Link to="/home">HOME</Link>
      &nbsp;&nbsp;
      <Link to="/about">ABOUT</Link>
      &nbsp;&nbsp;
      <Link to="/availableKittens">Available Kittens</Link>
      &nbsp;&nbsp;
      <Link to="/viewMothers" state={{parent: 'mother'}}>View Our Dams</Link>
      &nbsp;&nbsp;
      <Link to="/viewFathers" state={{parent: 'father'}}>View Our Sires</Link>
      &nbsp;&nbsp;
      <Link to="/reviews">REVIEWS</Link>
      &nbsp;&nbsp;
      <Link to="/waitingListForm">Waiting List Form</Link>
      &nbsp;&nbsp;
      <Link to="/contact">CONTACT</Link>
      &nbsp;&nbsp;
      <Link to="/instagram">IG</Link>
      &nbsp;&nbsp;
      <Link to="/facebook">FB</Link>
      &nbsp;&nbsp;
    </nav>
  )
}

export default NavBar
