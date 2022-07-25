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
    <>
    {!meContext.id &&
      <nav className='topMenu'>
        {/* <div className="forFlexBoxOnly"/> */}
        <div>
          <h1 id='h1'>Planet Scottish Fold{meContext.username ? meContext.username : ''}</h1>
        </div>
        <div className='topMenu__links'>
          <Link  to='/waitingListForm'>Apply</Link>
          <Link to='login'>Login</Link>
        </div>
      </nav>
    }
    {meContext.id &&
      <nav>
        <span className='topMenu__navButton'>
        {isPrivileged(type) &&
          <>
            <button className='buttonAsLink' type='button' onClick={handleNavView}>View User Navigation</button>
          </>
        }
        </span>

        <span className='topMenu__msg'>Hello {meContext.username}. Welcome to Planet Scottish Fold!</span>

        <Link className='topMenu__loginout' to='logout'>Log Out</Link>
      </nav>
      }
    </>
  )
}

export default TopLineMenuBar
