import axios from 'axios';

const baseUrl = 'https://luncher-app-backend.herokuapp.com';

export const FETCH_SCHOOLS_START = 'FETCH_SCHOOLS_START';
export const FETCH_SCHOOLS_SUCCESS = 'FETCH_SCHOOLS_SUCCESS';
export const FETCH_SCHOOLS_FAILED = 'FETCH_SCHOOLS_FAILED';

export const getSchools = () => dispatch => {
    dispatch({ type: FETCH_SCHOOLS_START });
        axios.get(`${baseUrl}/schools`)
            .then(res => dispatch({ type: FETCH_SCHOOLS_SUCCESS, payload: res }))
            .catch(err => dispatch({ type: FETCH_SCHOOLS_FAILED, payload: err }))
}

export const CREATE_SCHOOL_START = 'CREATE_SCHOOL_START';
export const CREATE_SCHOOL_SUCCESS = 'CREATE_SCHOOL_SUCCESS';
export const CREATE_SCHOOL_FAILED = 'CREATE_SCHOOL_FAILED';

export const createSchool = schoolInfo => dispatch => {
    const token = localStorage.getItem('token');
    const reqOptions = {
        headers: {
            Authorization: token
        }
    }
    dispatch({ type: CREATE_SCHOOL_START })
        axios.post(`https://luncher-app-backend.herokuapp.com/schools/`, schoolInfo, reqOptions)
            .then(res => console.log(res))
            .catch(err => console.log(err))
}

