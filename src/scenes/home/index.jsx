import React, { Component } from 'react';

// Login
import Login from './../user';

import { Store as store } from './../../store'

import './style.scss'

class Home extends Component {
  constructor(props) {
    super(props)
  } 

  render(){
    return(
      <div>
        { 
          store.getState().user.logged ? (
            <h1>Home Page</h1>
          ) : (
            <Login />
          )
        }


      </div>
    )
  }
}

export default Home;