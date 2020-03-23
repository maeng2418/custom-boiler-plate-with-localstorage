import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    AUTH_USER,
} from './types';

const loginUser = (dataTosubmit) => {

    const request = axios.post('/api/users/login', dataTosubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

const registerUser = (dataTosubmit) => {
    
    const request = axios.post('/api/users/register', dataTosubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

const logout = () => {

    const jwt = localStorage.getItem('jwt') ? localStorage.getItem('jwt') : null;
    const request = axios.get('/api/users/logout',{headers: {'Authorization': `JWT ${jwt}`}})
        .then(response => response.data)

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

const auth = () => {

    const jwt = localStorage.getItem('jwt') ? localStorage.getItem('jwt') : null;
    const request = axios.get('/api/users/auth',{headers: {'Authorization': `JWT ${jwt}`}})
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}

const userActionCreators = {
    loginUser,
    registerUser,
    logout,
    auth,
};

export default userActionCreators;