import React, { Component } from 'react'
import HomeContent from './container.jsx'

import axios from 'axios'


class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      userAuth: false,
      searchInit: false,
      albumsMoreRecents: [
        {
          image: 'http://via.placeholder.com/172x172',
          name: 'Nome do Album',
          artists: 'Nome do Artista',
          link: '#'
        },
        {
          image: 'http://via.placeholder.com/172x172',
          name: 'Nome do Album 2',
          artists: 'Nome do Artista',
          link: '#'
        }
      ],
      albumsRecentSearch: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Inicia a integração
    const client_id = 'efa4f35a45a6478b8616229dab22273a';
    const client_secret = '3150d7a5417e4e6cb8560340cf7746b9';
    const redirect_uri = 'http://localhost:3000';
    const scope = 'user-read-private user-read-email';

    function login(callback) {
      function getLoginURL(scopes) {
        return 'https://accounts.spotify.com/authorize?client_id=' + client_id +
          '&redirect_uri=' + encodeURIComponent(redirect_uri) +
          '&scope=' + encodeURIComponent(scopes.join(' ')) +
          '&response_type=token';
      }

      var url = getLoginURL([
        'playlist-modify-public'
      ]);

      window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${redirect_uri}/callback`;


    }

    function followPlaylist(accessToken, playlistUri) {
      var parts = playlistUri.split(':');
     
      axios({
        method: 'PUT',
        url: 'https://api.spotify.com/v1/users/' + parts[2] + '/playlists/' + parts[4] + '/followers',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        },
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
      }).then((response) => {
        console.log(response)
      })
    }

    var followButton = document.getElementById('btn-follow'),
      playlistUri = 'spotify:user:spotify:playlist:1Hd6FKA6On582nMsfpoRTl';

    followButton.addEventListener('click', function () {
      login(function (accessToken) {
        followPlaylist(accessToken, playlistUri);
      });
    });
    
  }

  componentWillReceiveProps(nextProps) {


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

export default HomeView