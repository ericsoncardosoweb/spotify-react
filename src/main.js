import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './store';
import Template from './template';


ReactDOM.render( 
  <Provider store={Store}>
    <Template /> 
  </Provider>
, document.getElementById('root'));

