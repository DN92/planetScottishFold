import React from 'react'
import { Link } from 'react-router-dom'

const NavMobile = ({setShowMobileNav}) => {

  const handleClick = (event) => {
    if (event.target.localName === 'a') {
      setShowMobileNav(false)

      const hamburgerMenu = document.querySelector('#nav__toggle')
        if(hamburgerMenu) {
          hamburgerMenu.className = `nav__toggle`
        }
      const hamburgerMenuWrapper = document.querySelector('#hamburger-wrapper')
        if(hamburgerMenuWrapper) {
          hamburgerMenuWrapper.className = 'hamburger-wrapper'
        }
    }
  }

  return (
    <div className='navMobileWrapper'>
      <nav onClick={handleClick} className='navMobile'>
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/availableKittens">OUR KITTENS</Link>
        <Link to="/viewCats/mother" >OUR DAMS</Link>
        <Link to="/viewCats/father" >OUR STUDS</Link>
        <Link to="/reviews">REVIEWS</Link>
        <Link to="/waitingListForm">WAITING LIST</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>

    </div>
  )
}

export default NavMobile
