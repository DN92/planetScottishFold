import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import MeContext from '../MeContextPro'


const TopLineMenuBar = () => {

  const meContext = useContext(MeContext)
  // console.log(meContext.username)
  // console.log(meContext.id)
  // console.log(!meContext.id)
  return (
    <nav>
      {!meContext.id &&
        <div>
          <span>Welcome to Planet Scottish Fold!
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {meContext.username ? meContext.username : ''}</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='login'>Login</Link>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link to='signUp'>Sign Up</Link>
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