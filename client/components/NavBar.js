import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <Link to="home">HOME</Link>
      &nbsp;
      <Link to="about">ABOUT</Link>
      &nbsp;
      <Link to="availableKittens">Available Kittens</Link>
      &nbsp;
      <Link to="reviews">REVIEWS</Link>
      &nbsp;
      <Link to="waitingListForm">Waiting List Form</Link>
      &nbsp;
      <Link to="contact">CONTACT</Link>
      &nbsp;
      <Link to="instagram">IG</Link>
      &nbsp;
      <Link to="facebook">FB</Link>
    </nav>
  )
}

export default NavBar
