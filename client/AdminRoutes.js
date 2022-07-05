import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NewUserRequests from './components/admin/NewUserRequests'
import RequestReview from './components/admin/RequestReview'
import CreateKitten from './components/admin/CreateKitten'
import AdminAllView from './components/admin/AdminAllView'
import EditKitten from './components/admin/EditKitten'


const AdminRoutes = () => {

  return (
    <Routes>
      <Route path='newUserRequests' element={<NewUserRequests />} />
      <Route path='newUserRequests/:requestId' element={<RequestReview />}></Route>
      <Route path='createKitten' element={<CreateKitten />} />
      <Route path='adminAllView' element={<AdminAllView />} />
      <Route path='editKitten' element={<EditKitten />} />
    </Routes>
  )
}

export default AdminRoutes

