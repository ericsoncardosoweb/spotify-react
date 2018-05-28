import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'

import { UserActions } from './../user/actions'

class Callback extends Component {
  constructor(props) {
    super(props)
    this.action = new UserActions(this.props.dispatch);
  }
  
  componentDidMount() {
    function getHashParams() {
      let hashParams = {};
      let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    const params = getHashParams();

    const access_token = params.access_token,
      refresh_token = params.refresh_token,
      error = params.error;

    if (error) {
      alert('Ocorreu uma falha em sua autenticação');
    } else {
      if (access_token) {

        // Salva o código de acesso
        localStorage.setItem('access_token', access_token);
        this.action.login(); // Atualiza estado da app


      }

    }
  }
  
  

  render() {
    return null
  }
}

function mapStateToProps(state, props) {
  return { user: state }
}
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
