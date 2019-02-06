import axios from 'axios';

const baseUrl = 'https://luncher-app-backend.herokuapp.com'

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUp = signUpInfo => dispatch => {
    dispatch({ type: SIGN_UP_START })
        axios.post(`${baseUrl}/api/register`, signUpInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err))
}   