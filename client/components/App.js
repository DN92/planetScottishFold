import React, { useState, useContext} from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'  // react Head component
import FrontEndRoutes from '../FrontEndRoutes'
import AdminRoutes from '../AdminRoutes'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'
import AdminBar from './AdminBar'
import TopLineMenuBar from './TopLineMenuBar'
import { isPrivileged } from '../../myModelsConfig'
import MeContext from '../MeContextPro'
import NavMobile from './NavMobile'
import AttentionModal from './AttentionModal'
import useLocalStorage from '../customHooks/useLocalStorage'


const App = () => {

  const {type} = useContext(MeContext)
  //  as an admin, this flag lets you view or hide the regular navbar
  const [viewNav, setViewNav] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [modalOpen, setModalOpen] = useLocalStorage(
    'modalOpen', localStorage.hasOwnProperty('modalOpen') ?
      localStorage.getItem('modalOpen')
      :
      false
  )

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
          {modalOpen && <AttentionModal setModalOpen={setModalOpen} /> }
          {showMobileNav && <NavMobile setShowMobileNav={setShowMobileNav} />}
          {!showMobileNav &&
            <>
              {isPrivileged(type) ? <AdminRoutes /> : <FrontEndRoutes setModalOpen={setModalOpen} />}
            </>
          }
        </div>
        {!showMobileNav && <Footer /> }
      </HistoryRouter>
    </>
  )
}

export default App
