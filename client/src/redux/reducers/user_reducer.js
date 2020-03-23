import {
    LOGIN_USER, REGISTER_USER, LOGOUT_USER,
} from 'redux/actions/types';

export default function (state={}, action) {
    switch(action.type) {
        case LOGIN_USER:
            localStorage.setItem("jwt", action.payload.jwt);
            return { ...state, loginSuccess: action.payload };
        
        case REGISTER_USER:
            return { ...state, register: action.payload }
        
        case LOGOUT_USER:
            return { ...state, loginSuccess: null }

        default:
            return state;
    }
}