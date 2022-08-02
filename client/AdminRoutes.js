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
import PlaceHolder from "./components/PlaceHolder";
import HomeComponent from './components/Home';
import About from './components/About';
import AvailableKittens from './components/AvailableKittens';
import Reviews from './components/Reviews';
import ClientQuestionnaire from './components/ClientQuestionnaire';
import ContactRequestForm from './components/ContactRequestForm';
import ConfirmClientQuestionnaire from './components/ConfirmClientQuestionnaire';
import AuthFrom from './components/AuthForm';
import My404 from './components/My404'
import KittenDetailedView from './components/KittenDetailedView'
import Logout from './components/Logout'
import ViewCats from './components/ViewCats'
import CatDetailedView from './components/CatDetailedView';
import QuestionnaireConfirmation from './components/QuestionnaireConfirmation'

const AdminRoutes = () => {

  return (
    <Routes>
      {/* admin only */}
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

      {/* plus public facing */}

      <Route path='/' element={<HomeComponent />} />
      <Route path='/login' element={<AuthFrom />} />
      <Route path='/home' element={<HomeComponent />} />
      <Route path='/about' element={<About />} />
      <Route path='/availableKittens' element={<AvailableKittens />} />
      <Route path='/kittenDetailed/:id' element={<KittenDetailedView />} />
      <Route path='/viewCats/:MOTHERorFATHER' element={<ViewCats />} >
      </Route>
      <Route path='/catDetailedView/:MOTHERorFATHER/:id' element={<CatDetailedView />} />
      <Route path='/reviews' element={<Reviews />} />
      <Route path='/waitingListForm' element={<ClientQuestionnaire />} />
      <Route path='/confirmClientQuestionnaire' element={<ConfirmClientQuestionnaire />} />
      <Route path='/contact' element={<ContactRequestForm />} />
      <Route path='/instagram' element={<PlaceHolder />} />
      <Route path='/facebook' element={<PlaceHolder />} />
      <Route path='/404' element={<My404 />} />
      <Route path='/QConfirmation' element={<QuestionnaireConfirmation />} />
      <Route path='/logout' element={<Logout />} />

      {/* Redirects */}
      <Route path='/viewCats' element={<Navigate to='mother'/>}></Route>
      <Route path='/catDetailed' element={<Navigate to='mother' />} />
      <Route path='/catDetailed/mother' element={<Navigate to='1' />} />
    </Routes>
  )
}

export default AdminRoutes

