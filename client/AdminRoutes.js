import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NewUserRequests from './components/admin/NewUserRequests'
import RequestReview from './components/admin/RequestReview'
import AdminAllView from './components/admin/AdminAllView'
import CreateKitten from './components/admin/CreateKitten'
import EditKitten from './components/admin/EditKitten'
import CreateMother from './components/admin/CreateMother'
import EditMother from './components/admin/EditMother'


const AdminRoutes = () => {

  return (
    <Routes>
      <Route path='newUserRequests' element={<NewUserRequests />} />
      <Route path='newUserRequests/:requestId' element={<RequestReview />}></Route>
      <Route path='adminAllView' element={<AdminAllView />} />
      <Route path='createKitten' element={<CreateKitten />} />
      <Route path='editKitten' element={<EditKitten />} />
      <Route path='createMother' element={<CreateMother />} />
      <Route path='editMother' element={<EditMother />} />
    </Routes>
  )
}

export default AdminRoutes

