import { USER } from './actions';

const initialState = {
    name: null,
    logged: false,
    verified: false
}
 
export function UserReducer(state = initialState, action) {
    var user = Object.assign({}, state);
    switch (action.type) {
        case USER.login.success:
        case USER.verify.success:
            user.verified = true;
            user.logged = true;
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
}
