import axios from 'axios';
import {
    LOGIN_USER,
} from './types';

const loginUser = (dataTosubmit) => {

    const request = axios.post('/api/users/login', dataTosubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

const userActionCreators = {
    loginUser,
};

export default userActionCreators;