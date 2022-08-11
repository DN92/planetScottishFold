import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../myModelsConfig'


const TopLineMenuBar = ({setViewNav, setShowMobileNav}) => {

  const meContext = useContext(MeContext)
  const { type } = meContext

  const handleNavView = () => {
    setViewNav(prev => !prev)
  }

  const handleMobileNavToggle = () => {
    const root = document.querySelector('#root')
    root?.className === '' ?
      root.className = 'background-img1' :
      root.className = ''
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

  const handleCloseMobileNav = () => {
    const root = document.querySelector('#root')
    const hamburgerMenu = document.querySelector('#nav__toggle')
    const hamburgerMenuWrapper = document.querySelector('#hamburger-wrapper')
    if(root) root.className = ''
    if(hamburgerMenu) hamburgerMenu.className = 'nav__toggle'
    if(hamburgerMenuWrapper) hamburgerMenuWrapper = 'hamburger-wrapper'
    setShowMobileNav(false)
  }

  return (
    <nav className='topNav'>
        <>
          <div className='topMenu'>
            <div className='topMenu__headline'>
              <Link to='/home'>
                <h1 id='h1'>
                  {isPrivileged(type) ? 'ADMIN VIEW' : 'PLANET SCOTTISH FOLD'}
                </h1>
                <h1 id='h1TinyScreen'>PSF</h1>
              </Link>
            </div>
            {meContext.id ?
              <div className='topMenu__links'>
                {isPrivileged(type) &&
                  <button className='buttonAsLink' type='button' onClick={handleNavView}>View User Navigation</button>
                }
                <p className='topMenu__greeting'>Logged in as {meContext.email} </p>
                <Link onClick={handleCloseMobileNav} className='topMenu__loginout' to='logout'>Log Out</Link>

              </div> :
              <div className='topMenu__links'>
                <Link onClick={handleCloseMobileNav} to='/waitingListForm'>Apply</Link>
                <Link onClick={handleCloseMobileNav} to='login'>Login</Link>
              </div>

            }
          </div>
          <div id='hamburger-wrapper' className='hamburger-wrapper' onClick={handleMobileNavToggle}>
            <button id='nav__toggle' className='nav__toggle' >
                <span className='hamburger'></span>
            </button>
          </div>
        </>
    </nav>
  )
}

export default TopLineMenuBar
