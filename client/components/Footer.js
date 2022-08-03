import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { isPrivileged } from '../../myModelsConfig'
import MeContext from '../MeContextPro'


const Footer = () => {

  const { type } = useContext(MeContext)

  return (
    <div className='footer'>
      {!isPrivileged(type) &&
        <>
          <div className='footer__cards'>
            <div className='footer__card tica-card'>
              <a href='https://tica.org/' target='_blank'>
                <img src="/otherPictures/ticaLogo.webp" alt="Tica Logo" />
              </a>
            </div>
            <div className='footer__card'>
              <a href='https://catkingpin.com/' target='_blank' >
                <img src="/otherPictures/catKingPinAffPic.webp" alt="Cat King Pin Affiliate Image" />
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
  )
}

export default Footer
