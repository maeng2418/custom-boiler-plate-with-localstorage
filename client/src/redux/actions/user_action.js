import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
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

const userActionCreators = {
    loginUser,
    registerUser,
};

export default userActionCreators;