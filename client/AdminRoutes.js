import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import NewUserRequests from './components/admin/NewUserRequests'
import RequestReview from './components/admin/RequestReview'
import AdminAllView from './components/admin/AdminAllView'
import CreateKitten from './components/admin/CreateKitten'
import EditKitten from './components/admin/EditKitten'
import CreateCat from './components/admin/CreateCat'
import EditCat from './components/admin/EditCat'


const AdminRoutes = () => {

  return (
    <Routes>
      <Route path='/newUserRequests' element={<NewUserRequests />} />
      <Route path='/newUserRequests/:requestId' element={<RequestReview />}></Route>
      <Route path='/adminAllView' element={<AdminAllView />} />
      <Route path='/createKitten' element={<CreateKitten />} />
      <Route path='/editKitten' element={<EditKitten />} />
      <Route path='/createCat/:MOTHERorFATHER' element={<CreateCat />} />
      <Route path='/editCat/: MOTHERorFATHER' element={<EditCat />} />

      {/* Redirects */}
      <Route path='/createCat' element={<Navigate to='mother'/>}></Route>
      <Route path='/editCat' element={<Navigate to='mother' />} />
    </Routes>
  )
}

export default AdminRoutes

