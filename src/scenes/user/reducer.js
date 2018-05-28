import axios from 'axios'
import { USER } from './actions';

const initialState = {
    name: null,
    logged: false,
    verified: false,
    token: false
}
 
export function UserReducer(state = initialState, action) {
    const user = Object.assign({}, state);
    const access_token = localStorage.getItem('access_token');

    axios({
        url: 'https://api.spotify.com/v1/me',
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    }).then((response) => {
        switch (action.type) {
            case USER.login.success:
            case USER.verify.success:
                user.name = response.data.display_name;
                user.verified = true;
                user.logged = true;
                user.token = access_token;
                return user;
            case USER.logout.success:
                user.logged = false;
                return user;
            case USER.verify.error: 
                user.verified = false;
                return user;
            default:
                return user;
        }
    })

}
