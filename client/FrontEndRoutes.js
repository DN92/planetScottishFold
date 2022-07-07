import React from 'react';
import { Routes, Route } from "react-router-dom";
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
import ViewMothers from './components/ViewMothers'
import MotherDetailedView from './components/MotherDetailedView';
import QuestionnaireConfirmation from './components/QuestionnaireConfirmation'

const FrontEndRoutes = () => {

  //  later, there should be guest, user, adminViewer, and admin Route views
  return (
    <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/login' element={<AuthFrom />} />
        <Route path='/home' element={<HomeComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/availableKittens' element={<AvailableKittens />} />
        <Route path='/kittenDetailed' element={<KittenDetailedView />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/waitingListForm' element={<ClientQuestionnaire />} />
        <Route path='/confirmClientQuestionnaire' element={<ConfirmClientQuestionnaire />} />
        <Route path='/contact' element={<ContactRequestForm />} />
        <Route path='/instagram' element={<PlaceHolder />} />
        <Route path='/facebook' element={<PlaceHolder />} />
        <Route path='/404' element={<My404 />} />
        <Route path='/QConfirmation' element={<QuestionnaireConfirmation />} />
        <Route path='viewMothers' element={<ViewMothers />} />
        <Route path='viewFathers' element={<ViewMothers />} />
        <Route path='motherDetailed' element={<MotherDetailedView />} />
        <Route path='fatherDetailed' element={<MotherDetailedView />} />
        <Route path='logout' element={<Logout />} />

      </Routes>
  )
}

export default FrontEndRoutes
