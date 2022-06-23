import React, {useState, useEffect} from "react";
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import placeHold from "./components/placeHolder";

const frontEndRoutes = () => {

  const userType = 'guest'

  return (
    <div>
      <Switch>
        <Route exact path='/home' component={placeHold} />
        <Route exact path='/about' component={placeHold} />
        <Route exact path='/reviews' component={placeHold} />
        <Route exact path='/waitingListForm' component={placeHold} />
        <Route exact path='/contact' component={placeHold} />
        <Route exact path='/instagram' component={placeHold} />
        <Route exact path='/facebook' component={placeHold} />
        {/* <Route exact path='/' component={} /> */}
      </Switch>
    </div>
  )

}

export default frontEndRoutes
