import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';

export const routeCodes = {
  DASHBOARD: '/',
  ABOUT: '/about',
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path={ routeCodes.POCKET_AUTH } component={ Dashboard } />
          <Route path={ routeCodes.ABOUT } component={ About } />

          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}