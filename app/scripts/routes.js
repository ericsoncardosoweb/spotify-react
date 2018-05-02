import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import NotFound from './pages/notFound.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='/' component={ Home } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;