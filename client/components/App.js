import React, {useState, useContext} from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import FrontEndRoutes from '../FrontEndRoutes'
import AdminRoutes from '../AdminRoutes'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'
import AdminBar from './AdminBar'
import TopLineMenuBar from './TopLineMenuBar'
import { isPrivileged } from '../../secrets'
import MeContext from '../MeContextPro'


const App = () => {

  const {type} = useContext(MeContext)
  //  as an admin, this flag lets you view or hide the regular navbar
  const [viewNav, setViewNav] = useState(false)

  //  .mainContentContainer is for styling purposes only

  return (
    <HistoryRouter history={history}>
      <div className='header'>
        <TopLineMenuBar setViewNav={setViewNav}/>
        {isPrivileged(type) ? <AdminBar /> :  <NavBar />}
        {isPrivileged(type) && viewNav && <NavBar />}
      </div>
      <div className='mainContentContainer'>
        <FrontEndRoutes />
        {isPrivileged(type) && <AdminRoutes />}
      </div>
      <Footer />
    </HistoryRouter>
  )
}

export default App
