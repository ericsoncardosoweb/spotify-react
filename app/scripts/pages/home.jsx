import React, { Component } from 'react'
import HomeContent from './home-content.jsx'
import axios from 'axios'


class Home extends Component {  
  constructor(){
    super()
    this.state = {
      userAuth: null,
      searchInit: false,
      albumsMoreRecents: [
        {
          image: 'http://via.placeholder.com/172x172',
          name: 'Nome do Album',
          artists: 'Nome do Artista',
          link: '#'
        }
      ], 
      albumsRecentSearch: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  componentDidMount() { 
    
    console.log('App Init - Home')

    const client_id = 'efa4f35a45a6478b8616229dab22273a';
    const client_secret = '3150d7a5417e4e6cb8560340cf7746b9';
    const redirect_uri = 'http://localhost:3000';
    const scope = 'user-read-private user-read-email';

    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}/callback`;


  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token);
    };

    if (this.audio !== undefined) {
      this.audio.volume = nextProps.volume / 100;
    }

  }

  componentWillUnmount() {

  }

  handleChange() {
    
  }

  render() {
    return <HomeContent 
      userAuth={this.state.userAuth}
      searchInit={this.state.searchInit}
      albumsMoreRecents={this.state.albumsMoreRecents}
      albumsRecentSearch={this.state.albumsRecentSearch}
     />
  }
}

export default Home