import React, { useState, useContext } from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'  // react Head component
import FrontEndRoutes from '../FrontEndRoutes'
import AdminRoutes from '../AdminRoutes'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'
import AdminBar from './AdminBar'
import TopLineMenuBar from './TopLineMenuBar'
import { isPrivileged } from '../../secrets'
import MeContext from '../MeContextPro'
import NavMobile from './NavMobile'

const App = () => {

  const {type} = useContext(MeContext)
  //  as an admin, this flag lets you view or hide the regular navbar
  const [viewNav, setViewNav] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <HistoryRouter history={history}>
        <Helmet>
          <title>Planet Scottish Fold | Scottish Fold Cattery</title>
          <meta name='Planet Scottish Fold' contents='Proud Breeders of Scottish Fold Kittens' />
        </Helmet>
        <div className='header'>
          <TopLineMenuBar setViewNav={setViewNav} setShowMobileNav={setShowMobileNav}/>
          {isPrivileged(type) ? <AdminBar /> :  <NavBar />}
          {isPrivileged(type) && viewNav && <NavBar />}
        </div>
        <div className='mainContentContainer'>
          {showMobileNav && <NavMobile setShowMobileNav={setShowMobileNav} />}
          {!showMobileNav &&
            <>
              {isPrivileged(type) ? <AdminRoutes /> : <FrontEndRoutes />}
            </>
          }
        </div>
        {!showMobileNav && <Footer /> }
      </HistoryRouter>
    </>
  )
}

export default App
