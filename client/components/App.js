import React, {useState, useContext} from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import FrontEndRoutes from '../FrontEndRoutes'
import AdminRoutes from '../AdminRoutes'
import Header from './Header'
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

  return (
    <HistoryRouter history={history}>
      <TopLineMenuBar setViewNav={setViewNav}/>
      {isPrivileged(type) ? <AdminBar /> :  <NavBar />}
      {isPrivileged(type) && viewNav && <NavBar />}
      <Header />
      <FrontEndRoutes />
      {isPrivileged(type) && <AdminRoutes />}
      <Footer />
    </HistoryRouter>
  )
}

export default App
