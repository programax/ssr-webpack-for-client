import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from './Dashboard.jsx';
import { Landing } from './Landing.jsx';

const { dashboardData = [], landingData = [] } = window.__initialState__;

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/landing">
          <Landing data={landingData} />
        </Route>
        <Route path="/dashboard">
          <Dashboard data={dashboardData} />
        </Route>
      </Switch>
    </Router>
  );
};
