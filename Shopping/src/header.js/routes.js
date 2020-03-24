import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Help,
  How,
  Navigation
} from "../Routecomponent"
import Main from '../component/main/Main';

const Routes = () => {
    return (
      <React.Fragment>
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path="/Help">
              <Help />
            </Route>
            <Route path="/How">
              <How />
            </Route>
              <Route path="/" component={Main} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
  export default Routes