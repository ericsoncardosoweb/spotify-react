import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserActions } from './actions'

export default class User extends Component {
  static propTypes = {
    user: PropTypes
  }

  constructor(props) {
    super(props); 
    this.state = {
    }
  }

  authentication() {
    console.log('Iniciando processo de autenticação...')
    setTimeout(() => {
      this.action = new UserActions(this.props.dispatch);
      this.action.login();
      console.log('Concluído processo de autenticação...');
      window.location = "/dashboard";
    }, 1000);
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
)(User);