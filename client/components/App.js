import React, { useState, useEffect } from 'react'
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import axios from 'axios'
import FrontEndRoutes from '../FrontEndRoutes'
import AdminRoutes from '../AdminRoutes'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'
import {MeProvider} from '../MeContextPro'

const App = () => {

  return (
    <HistoryRouter history={history}>
      <MeProvider >
        <Header />
        <NavBar />
        <FrontEndRoutes />
        <AdminRoutes />
        <Footer />
      </MeProvider>
    </HistoryRouter>
  )
}

export default App
