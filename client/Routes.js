import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import placeHold from "./components/placeHolder";
import homeComponent from './components/home';

const frontEndRoutes = () => {

  //  later, there should be guest, user, adminViewer, and admin Route views

  const userType = 'guest'

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/home' component={homeComponent} />
          <Route exact path='/about' component={placeHold} />
          <Route exact path='/reviews' component={placeHold} />
          <Route exact path='/waitingListForm' component={placeHold} />
          <Route exact path='/contact' component={placeHold} />
          <Route exact path='/instagram' component={placeHold} />
          <Route exact path='/facebook' component={placeHold} /> */
          {/* <Route exact path='/' component={} /> */}
          <Route to='/home' component={homeComponent} />
        </Routes>
      </Router>
        <p>hello there</p>
    </div>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default frontEndRoutes
