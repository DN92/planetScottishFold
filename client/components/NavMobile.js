import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'
import SocialMediaNavBar from './SocialMediaNavBar'

const NavMobile = ({setShowMobileNav}) => {

  const meContext = useContext(MeContext)
  const { type } = meContext

  const handleClick = (event) => {
    if (event.target.localName === 'a') {
      setShowMobileNav(false)

      const root = document.querySelector('#root')
      const hamburgerMenu = document.querySelector('#nav__toggle')
      const hamburgerMenuWrapper = document.querySelector('#hamburger-wrapper')
      if(root) root.className = ''
      if(hamburgerMenu) hamburgerMenu.className = `nav__toggle`
      if(hamburgerMenuWrapper) hamburgerMenuWrapper.className = 'hamburger-wrapper'
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
          <Link to='availableKittens' >Edit Kittens</Link>
          <Link to='createCat/mother' >Add A Dam </Link>
          <Link to='createCat/father' >Add A Sire </Link>
          <Link to='viewCats/mother' >Edit A Dam </Link>
          <Link to='viewCats/father' >Edit A Sire </Link>
          <Link to='directMessages' >Direct Messages </Link>
        </>
        :
        <>
          <Link to="/home">Home</Link>
          <Link to="/availableKittens">Kittens For Sale</Link>
          <Link to="/viewCats" >Dams and Sires</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/waitingListForm">Apply To Adopt</Link>
          <Link to="/contact">Contact</Link>
        </>
      }
      </nav>
      <SocialMediaNavBar />
    </div>
  )
}

export default NavMobile
