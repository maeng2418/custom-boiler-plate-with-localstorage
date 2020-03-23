import {
    LOGIN_USER
} from 'redux/actions/types';

export default function (state={}, action) {
    switch(action.type) {
        case LOGIN_USER:
            localStorage.setItem("jwt", action.payload.jwt);
            return { ...state, loginSuccess: action.payload };

        default:
            return state;
    }
}