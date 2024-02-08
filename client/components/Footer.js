import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { isPrivileged } from '../../myModelsConfig'
import MeContext from '../MeContextPro'
import useWindowSize from '../customHooks/useWindowSize'
import SocialMediaNavBar from './SocialMediaNavBar'

const Footer = () => {

  const { type } = useContext(MeContext)
  const { width: screenWidth } = useWindowSize()

  return (
    <>
      <div className='footer'>
        {!isPrivileged(type) &&
          <>
            <div className='footer__cards'>
              <div className='footer__card tica-card'>
                <a href='https://tica.org/' target='_blank'>
                  <img className='footer-img-tica' src="/otherPictures/ticaLogo.webp" alt="Tica Logo" />
                </a>
                {screenWidth > 799 && <SocialMediaNavBar /> }
              </div>
              <div className='footer__card kingpin-card'>
                <a href='https://catkingpin.com/' target='_blank' >
                  <img className='footer-img-border' src="/otherPictures/catKingPinAffPic.webp" alt="Cat Kingpin homepage " />
                </a>
                <a href="https://petnax.com/" tarFFget='_blank'>
                  <img className='footer-img-border petnax-card' src='/petnax/petnax.png' alt='Petnax homepage' />
                </a>
              </div>
              <div className='footer__nav-wrapper'>
                <Link to='/waitingListForm' >Apply</Link>
                <Link to='/availableKittens'>Kittens</Link>
                <Link to='/contact'>Contact</Link>
              </div>
            </div>
          </>
        }
          <p>
            &copy;2022 by Planet Scottish Fold
          </p>
      </div>
    </>
  )
}

export default Footer
