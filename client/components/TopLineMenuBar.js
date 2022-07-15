import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import { isPrivileged } from '../../secrets'


const TopLineMenuBar = ({setViewNav}) => {

  const meContext = useContext(MeContext)
  const { type } = meContext

  const handleNavView = () => {
    setViewNav(prev => !prev)
  }

  return (
    <nav className='topMenu'>
    {!meContext.id &&
      <div>
        <div className="forFlexBoxOnly"/>
        <span className='topMenu__msg'>Welcome to Planet Scottish Fold!
          {meContext.username ? meContext.username : ''}</span>
        <div>
          <Link  to='/waitingListForm'>Apply</Link>
          <Link to='login'>Login</Link>
        </div>
      </div>
    }
    {meContext.id &&
      <div>
        <span className='topMenu__navButton'>
        {isPrivileged(type) &&
          <>
            <button className='buttonAsLink' type='button' onClick={handleNavView}>View User Navigation</button>
          </>
        }
        </span>

        <span className='topMenu__msg'>Hello {meContext.username}. Welcome to Planet Scottish Fold!</span>

        <Link className='topMenu__loginout' to='logout'>Log Out</Link>
      </div>
      }
    </nav>
  )
}

export default TopLineMenuBar
