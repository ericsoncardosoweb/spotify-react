import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Callback from './pages/callback.jsx';
import NotFound from './pages/notFound.jsx';

const historyOptions = {
  queryKey : true
};

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='/callback' component={ Callback } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);
 
export default routes;