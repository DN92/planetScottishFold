import React from 'react'
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import FrontEndRoutes from '../FrontEndRoutes'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'

const App = () => {

  return (
    <HistoryRouter history={history}>
      <Header />
      <NavBar />
      <FrontEndRoutes />
      <Footer />
    </HistoryRouter>
  )
}

export default App
