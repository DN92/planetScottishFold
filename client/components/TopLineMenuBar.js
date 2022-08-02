import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'


const TopLineMenuBar = ({setViewNav, setShowMobileNav}) => {

  const meContext = useContext(MeContext)
  const { type } = meContext

  const handleNavView = () => {
    setViewNav(prev => !prev)
  }

  const handleMobileNav = () => {
    const hamburgerMenu = document.querySelector('#nav__toggle')
    hamburgerMenu?.className === `nav__toggle` ?
      hamburgerMenu.className = 'nav__toggle nav-open' :
      hamburgerMenu.className = 'nav__toggle'
    const hamburgerMenuWrapper = document.querySelector('#hamburger-wrapper')
    hamburgerMenuWrapper?.className === 'hamburger-wrapper' ?
      hamburgerMenuWrapper.className = 'hamburger-wrapper nav-open' :
      hamburgerMenuWrapper.className = 'hamburger-wrapper'
    setShowMobileNav(prev => !prev)
  }

  const closeMobileNav = () => {
    const hamburgerMenu = document.querySelector('#nav__toggle')
    if(hamburgerMenu) hamburgerMenu.className = 'nav__toggle'
    const hamburgerMenuWrapper = document.querySelector('#hamburger-wrapper')
    if(hamburgerMenuWrapper) hamburgerMenuWrapper = 'hamburger-wrapper'
    setShowMobileNav(false)
  }

  return (
    <nav className='topNav'>
        <>
          <div className='topMenu'>
            <div className='topMenu__headline'>
              <h1 id='h1'>
                {isPrivileged(type) ? 'ADMIN VIEW' : 'Planet Scottish Fold'}
              </h1>
            </div>
            {meContext.id ?
              <div className='topMenu__links'>
                {isPrivileged(type) &&
                  <button className='buttonAsLink' type='button' onClick={handleNavView}>View User Navigation</button>
                }
                <p className='topMenu__greeting'>Logged in as {meContext.email} </p>
                <Link onClick={closeMobileNav} className='topMenu__loginout' to='logout'>Log Out</Link>

              </div> :
              <div className='topMenu__links'>
                <Link onClick={closeMobileNav} to='/waitingListForm'>Apply</Link>
                <Link onClick={closeMobileNav} to='login'>Login</Link>
              </div>

            }
          </div>
          <div id='hamburger-wrapper' className='hamburger-wrapper' onClick={handleMobileNav}>
            <button id='nav__toggle' className='nav__toggle' >
                <span className='hamburger'></span>
            </button>
          </div>
        </>
    </nav>
  )
}

export default TopLineMenuBar
