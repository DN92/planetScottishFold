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
          {isPrivileged(type) &&
            <>
              <button type='button' onClick={handleNavView}>View User Navigation</button>
            </>
          }
          <span>Welcome to Planet Scottish Fold!
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {meContext.username ? meContext.username : ''}</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='login'>Login</Link>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='/waitingListForm'>Apply</Link>
        </div>
      }
      {meContext.id &&
        <div>
          <span>Hello {meContext.username}. Welcome to Planet Scottish Fold!</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='logout'>Log Out</Link>
        </div>
      }
    </nav>
  )
}

export default TopLineMenuBar
