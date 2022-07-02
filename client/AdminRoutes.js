import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NewUserRequests from './components/admin/NewUserRequests'


const AdminRoutes = () => {

  return (
    <Routes>
      <Route path='/newUserRequests' element={<NewUserRequests />} />
    </Routes>
  )
}

export default AdminRoutes

