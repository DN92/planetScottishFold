import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NewUserRequests from './components/admin/NewUserRequests'
import RequestReview from './components/admin/RequestReview'
import CreateKitten from './components/admin/CreateKitten'


const AdminRoutes = () => {

  return (
    <Routes>
      <Route path='newUserRequests' element={<NewUserRequests />} />
      <Route path='newUserRequests/:requestId' element={<RequestReview />}></Route>
      <Route path='createKitten' element={<CreateKitten />} />

    </Routes>
  )
}

export default AdminRoutes

