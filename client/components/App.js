import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import FrontEndRoutes from '../FrontEndRoutes'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import history from '../history'

const App = () => {

  return (
    <BrowserRouter history={history}>
      <Header />
      <NavBar />
      <FrontEndRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
