import React, { useState, useEffect } from 'react'
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import axios from 'axios'
import FrontEndRoutes from '../FrontEndRoutes'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'

const App = () => {

  const [token, setToken] = useState(null)
  const [userType, setUserType] = useState('anonVisitor')

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {

    }
  },[])

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
