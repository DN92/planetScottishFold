import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (

    <nav className='navBar'>
      <Link to="/home">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/availableKittens">Available Kittens</Link>
      <Link to="/viewCats/mother" >View Our Dams</Link>
      <Link to="/viewCats/father" >View Our Sires</Link>
      <Link to="/reviews">REVIEWS</Link>
      <Link to="/waitingListForm">Waiting List Form</Link>
      <Link to="/contact">CONTACT</Link>
      {/* below routes under construction */}
      { false &&
        <>
          <Link to="/instagram">IG</Link>
          <Link to="/facebook">FB</Link>
        </>
      }
    </nav>

  )
}

export default NavBar
