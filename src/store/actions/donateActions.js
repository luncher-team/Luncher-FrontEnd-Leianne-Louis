import axios from 'axios';

const baseUrl = 'https://luncher-app-backend.herokuapp.com'

export const DONATE_START = 'DONATE_START';
export const DONATE_SUCCESS = 'DONATE_SUCCESS';
export const DONATE_FAILED = 'DONATE_FAILED';

export const donateFunds = (id, donation )=> dispatch => {
    dispatch({ type: DONATE_START })
        axios.put(`${baseUrl}/schools/${id}`)
}