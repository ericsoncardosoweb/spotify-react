import React, { Component } from 'react'
import { UserActions } from './actions'

import { Store as store } from './../../store'

class Login extends Component {
  constructor(props) {
    super(props);
    this.authentication = this.authentication.bind(this);
    this.state = {
      userLogged: store.getState().user.logged
    }
  }

  authentication() {
    // Inicia a integração
    const client_id = 'efa4f35a45a6478b8616229dab22273a';
    const client_secret = '3150d7a5417e4e6cb8560340cf7746b9';
    const redirect_uri = 'http://localhost:3000';
    const scope = 'user-read-private user-read-email';

    if (!this.state.userLogged) {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${redirect_uri}/callback`;
    }

    
  }

  render() {
    return (
      <div className="page-login">
        <button onClick={this.authentication} style={{padding: "15px", background: "#FFF", color: "#000"}}>Iniciar processo de autenticação</button>
      </div>
    )
  }
}

export default Login