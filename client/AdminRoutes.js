import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NewUserRequests from './components/admin/NewUserRequests'
import RequestReview from './components/admin/RequestReview'


const AdminRoutes = () => {

  return (
    <Routes>
      <Route path='newUserRequests' element={<NewUserRequests />} />
      <Route path='newUserRequests/:requestId' element={<RequestReview />}></Route>

    </Routes>
  )
}

export default AdminRoutes

