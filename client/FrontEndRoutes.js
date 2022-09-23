import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomeComponent from './components/Home';
import AvailableKittens from './components/AvailableKittens';
import ClientQuestionnaire from './components/ClientQuestionnaire';
import ContactRequestForm from './components/ContactRequestForm';
import ConfirmClientQuestionnaire from './components/ConfirmClientQuestionnaire';
import AuthFrom from './components/AuthForm';
import My404 from './components/My404'
import KittenDetailedView from './components/KittenDetailedView'
import Logout from './components/Logout'
import ViewCats from './components/ViewCats2'
import CatDetailedView from './components/CatDetailedView';
import QuestionnaireConfirmation from './components/QuestionnaireConfirmation'
import Reviews2 from './components/reviews/Reviews2';


const FrontEndRoutes = ({setModalOpen}) => {

  return (
    // public routes
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/login' element={<AuthFrom />} />
      <Route path='/home' element={<HomeComponent setModalOpen={setModalOpen} />} />
      <Route path='/availableKittens' element={<AvailableKittens />} />
      <Route path='/kittenDetailed/:model/:id' element={<KittenDetailedView />} />
      <Route path='/viewCats' element={<ViewCats />} >
      </Route>
      <Route path='/catDetailedView/:MOTHERorFATHER/:id' element={<CatDetailedView />} />
      <Route path='/reviews' element={<Reviews2 />} />
      <Route path='/waitingListForm' element={<ClientQuestionnaire />} />
      <Route path='/confirmClientQuestionnaire' element={<ConfirmClientQuestionnaire />} />
      <Route path='/contact' element={<ContactRequestForm />} />
      <Route path='/404' element={<My404 />} />
      <Route path='/QConfirmation' element={<QuestionnaireConfirmation />} />
      <Route path='/logout' element={<Logout />} />

{/* Redirects */}
      <Route path='/catDetailed' element={<Navigate to='mother' />} />
      <Route path='/catDetailed/mother' element={<Navigate to='1' />} />
    </Routes>
  )
}

export default FrontEndRoutes
