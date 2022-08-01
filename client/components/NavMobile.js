import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'

const NavMobile = ({setShowMobileNav}) => {

  const meContext = useContext(MeContext)
  const { type } = meContext

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
      {isPrivileged(type) ?
        <>
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
        </>
        :
        <>
          <Link to="/home">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/availableKittens">OUR KITTENS</Link>
          <Link to="/viewCats/mother" >OUR DAMS</Link>
          <Link to="/viewCats/father" >OUR STUDS</Link>
          <Link to="/reviews">REVIEWS</Link>
          <Link to="/waitingListForm">WAITING LIST</Link>
          <Link to="/contact">CONTACT</Link>
        </>
      }
      </nav>

    </div>
  )
}

export default NavMobile
