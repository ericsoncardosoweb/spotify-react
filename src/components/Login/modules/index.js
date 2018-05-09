import { setToken } from "../../../../../../../Users/erics/Desktop/Arquivos react/React/react-spotify-master/src/actions/tokenActions";

function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function setToken()  {
  // Set localStorage
  // 
}

// Recupera o código de autenticação
function appAuth() {
  /**
  * Obtains parameters from the hash of the URL
  * @return Object
  */

  var params = getHashParams();

  var access_token = params.access_token,
    refresh_token = params.refresh_token,
    error = params.error;

  if (error) {
    alert('There was an error during the authentication');
  } else {
    if (access_token) {
      
    } else {

    }
  }
}


export default appAuth
