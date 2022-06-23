import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PlaceHolder from "./components/PlaceHolder";
import HomeComponent from './components/Home';

const FrontEndRoutes = () => {

  //  later, there should be guest, user, adminViewer, and admin Route views

  const userType = 'guest'

  console.log('hehehe')

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<HomeComponent />} />
        <Route exact path='/about' element={<PlaceHolder />} />
        <Route exact path='/reviews' element={<PlaceHolder />} />
        <Route exact path='/waitingListForm' element={<PlaceHolder />} />
        <Route exact path='/contact' element={<PlaceHolder />} />
        <Route exact path='/instagram' element={<PlaceHolder />} />
        <Route exact path='/facebook' element={<PlaceHolder />} /> */
        {/* <Route exact path='/' element={} /> */}
        <Route to='/' element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default FrontEndRoutes
