import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (

    <nav className='navBar'>
      <Link to="/home">HOME</Link>
      <Link className='shrink-text' to="/waitingListForm">APPLY TO ADOPT</Link>
      <Link to="/availableKittens">OUR KITTENS</Link>
      <Link to='/viewCats'>DAMS AND SIRES</Link>
      <Link to="/reviews">REVIEWS</Link>
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
