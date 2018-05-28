import axios from 'axios'

const userAuthentication = () => {
  // Inicia a integração
  const client_id = 'efa4f35a45a6478b8616229dab22273a';
  const client_secret = '3150d7a5417e4e6cb8560340cf7746b9';
  const redirect_uri = 'http://localhost:3000';
  const scope = 'user-read-private user-read-email';

  localStorage.setItem('user', 'logged');

  if(localStorage.getItem('user') != 'logged') {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${redirect_uri}/callback`;
  }

  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  var params = getHashParams();

  var access_token = params.access_token,
    refresh_token = params.refresh_token,
    error = params.error;
    
    if (error) {
      alert('Ocorreu uma falha em sua autenticação');
    } else {
      if (access_token) {
      
      // Salva o código de acesso
      localStorage.setItem('access_token', access_token);
      access_token = localStorage.getItem('access_token');

      axios({
        url: 'https://api.spotify.com/v1/me',
        headers: {
          'Authorization': 'Bearer ' + access_token
        }
      }).then((response) => {
        console.log(response)
      })
    } else {
      
    }

  }






}

export default userAuthentication