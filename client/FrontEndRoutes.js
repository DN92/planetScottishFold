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


const FrontEndRoutes = () => {

  //  later, there should be guest, user, adminViewer, and admin Route views

  const userType = 'guest'

  return (
    <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route exact path='/home' element={<HomeComponent />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/availableKittens' element={<AvailableKittens />} />
        <Route exact path='/reviews' element={<Reviews />} />
        <Route exact path='/waitingListForm' element={<ClientQuestionnaire />} />
        <Route path='/confirmClientQuestionnaire' element={<ConfirmClientQuestionnaire />} />
        <Route exact path='/contact' element={<ContactRequestForm />} />
        <Route exact path='/instagram' element={<PlaceHolder />} />
        <Route exact path='/facebook' element={<PlaceHolder />} /> */
        {/* <Route exact path='/' element={} /> */}
      </Routes>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default FrontEndRoutes
