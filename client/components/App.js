import React, {useContext} from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import FrontEndRoutes from '../FrontEndRoutes'
import AdminRoutes from '../AdminRoutes'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'
import MeContext from '../MeContextPro'
import {isPrivileged} from '../../secrets'


const App = () => {
  const {type} = useContext(MeContext)

  return (
    <HistoryRouter history={history}>
      <Header />
      <NavBar />
      <FrontEndRoutes />
      {isPrivileged(type) && <AdminRoutes />}
      <Footer />
    </HistoryRouter>
  )
}

export default App
