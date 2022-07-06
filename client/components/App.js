import React, {useState, useEffect, useContext} from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import FrontEndRoutes from '../FrontEndRoutes'
import AdminRoutes from '../AdminRoutes'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'
import AdminBar from './AdminBar'
import TopLineMenuBar from './TopLineMenuBar'
import MeContext from '../MeContextPro'


const App = () => {

  return (
    <HistoryRouter history={history}>
      <TopLineMenuBar />
      <Header />
      {/* {isPrivileged(type) && <AdminBar />} */}
      <AdminBar />
      <NavBar />
      <FrontEndRoutes />
      <AdminRoutes />
      {/* {isPrivileged(type) && <AdminRoutes />} */}
      <Footer />
    </HistoryRouter>
  )
}

export default App
