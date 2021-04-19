import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HelloWorld } from './components/hello-world/hello-world';
import { ContextModule } from './modules/context-module/context.module';

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
              <ContextModule />
            </React.Fragment>
          </Route>
          <Route path="/drum">
            <div>Play the drums</div>
          </Route>
          <Route path="/">
            <React.Fragment>
              <HelloWorld />
              <ContextModule />
            </React.Fragment>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
