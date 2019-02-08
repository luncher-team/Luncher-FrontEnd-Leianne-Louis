import axios from 'axios';

const baseUrl = 'https://luncher-app-backend.herokuapp.com'

export const DONATE_START = 'DONATE_START';
export const DONATE_SUCCESS = 'DONATE_SUCCESS';
export const DONATE_FAILED = 'DONATE_FAILED';

export const donateFunds = (id, donation )=> dispatch => {
    const token = localStorage.getItem('token');
    const reqOptions = {
        headers: {
            Authorization: token
        }
    }
    dispatch({ type: DONATE_START })
        axios.put(`${baseUrl}/schools/${id}`, {donated: donation}, reqOptions)
            .then(res => {
                dispatch({ type: DONATE_SUCCESS, payload: res.data})
                window.location.href = '/'
            })
            .catch( err => dispatch({ type: DONATE_FAILED, payload: err}))
}