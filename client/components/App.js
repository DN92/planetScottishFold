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
import MessageBox from './MessageBox'

const messageArray = [
  "Price negotiable for Lorenzo, Jasmine, and Iris ONLY until 11/17/22",
  "Delivering to NJ/NY 11/18/22-11/20/22"
]

const App = () => {
  const {type} = useContext(MeContext)
  //  as an admin, this flag lets you view or hide the regular navbar
  const [showMessageBox, setShowMessageBox] = useState(true)
  const [viewNav, setViewNav] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [modalOpen, setModalOpen] = useLocalStorage(
    'modalOpen', localStorage.hasOwnProperty('modalOpen') ?
      localStorage.getItem('modalOpen')
      :
      false
  )

  //  Inline style was necessary for mainContentContainer to account for dynamic conditional rendering of footer on Mobile Nav Open Screen

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
          {/* inline styling present here */}
          <div className='mainContentContainer' style={showMobileNav ? {marginBottom: '0'} : {}}>
            {modalOpen && <AttentionModal setModalOpen={setModalOpen} /> }
            {showMessageBox &&
              <MessageBox
                messageArray={messageArray}
                options={{
                  closeOnClick: true,
                  onCloseText: 'Show Announcements'
                }}
              />
            }
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
