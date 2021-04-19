import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HelloWorld } from './components/hello-world/hello-world';
import { UserProfile } from './pages/user-profile/user-profile';

export const AppRouter = (props) => {
  return (
    <Router>
      {props.children}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="App-main">
        <Switch>
          <Route path="/user">
            <React.Fragment>
              <HelloWorld />
              <UserProfile />
            </React.Fragment>
          </Route>
          <Route path="/drum">
            <div>Play the drums</div>
          </Route>
          <Route path="/">
            <React.Fragment>
              <HelloWorld />
              <UserProfile />
            </React.Fragment>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
