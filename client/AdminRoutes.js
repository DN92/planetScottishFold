import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import NewUserRequests from './components/admin/NewUserRequests'
import RequestReview from './components/admin/RequestReview'
import AdminAllView from './components/admin/AdminAllView'
import CreateKitten from './components/admin/CreateKitten'
import EditKitten from './components/admin/EditKitten'
import CreateCat from './components/admin/CreateCat'
import EditCat from './components/admin/EditCat'
import DirectMessages from './components/admin/DirectMessages'
import ViewUsers from './components/admin/ViewUsers'
import UserLongView from './components/admin/UserLongView'

const AdminRoutes = () => {

  return (
    <Routes>
      <Route path='/newUserRequests' element={<NewUserRequests />} />
      <Route path='/newUserRequests/:requestId' element={<RequestReview />}></Route>
      <Route path='/viewUsers' element={<ViewUsers />}></Route>
      <Route path='/viewUsers/:id' element={<UserLongView />}></Route>
      <Route path='/adminAllView' element={<AdminAllView />} />
      <Route path='/createKitten' element={<CreateKitten />} />
      <Route path='/editKitten' element={<EditKitten />} />
      <Route path='/createCat/:MOTHERorFATHER' element={<CreateCat />} />
      <Route path='/editCat/:MOTHERorFATHER/:id' element={<EditCat />} />
      <Route path='/directMessages' element={<DirectMessages />} />

      {/* Redirects */}
      <Route path='/createCat' element={<Navigate to='mother'/>}></Route>
      <Route path='/editCat' element={<Navigate to='mother' />} />
    </Routes>
  )
}

export default AdminRoutes

