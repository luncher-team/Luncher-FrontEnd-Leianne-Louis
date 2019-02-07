import axios from 'axios';
import { signUp } from './signUpActions';

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
            .then(res => dispatch({ type: CREATE_SCHOOL_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: CREATE_SCHOOL_FAILED, payload: err }))
}

export const FETCH_SCHOOL_SELECTED_START = 'FETCH_SCHOOL_SELECTED_START';
export const FETCH_SCHOOL_SELECTED_SUCCESS = 'FETCH_SCHOOL_SELECTED_SUCCESS';
export const FETCH_SCHOOL_SELECTED_FAILED = 'FETCH_SCHOOL_SELECTED_FAILED';

export const getSchool = id => dispatch => {
    dispatch({ type: FETCH_SCHOOL_SELECTED_START })
        axios.get(`https://luncher-app-backend.herokuapp.com/schools/${id}`)
            .then(res => dispatch({ type: FETCH_SCHOOL_SELECTED_SUCCESS, payload: res.data}))
            .catch(err => dispatch({ type: FETCH_SCHOOLS_FAILED, payload: err}))
}

export const UPDATE_SCHOOL_START = 'UPDATE_SCHOOL_START';
export const UPDATE_SCHOOL_SUCCESS = 'UPDATE_SCHOOL_SUCCESS';
export const UPDATE_SCHOOL_FAILED = 'UPDATE_SCHOOL_FAILED';

export const updateSchool = (updatedInfo, id)=> dispatch => {
    console.log(updatedInfo, id)
    const token = localStorage.getItem('token');
    const reqOptions = {
        headers: {
            Authorization: token
        }
    }
    dispatch({ type: UPDATE_SCHOOL_START })
        axios.put(`https://luncher-app-backend.herokuapp.com/schools/${id}`, updatedInfo, reqOptions)
        .then(res => dispatch({ type: UPDATE_SCHOOL_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: UPDATE_SCHOOL_FAILED, payload: err}))
}

export const DELETE_SCHOOL_START = 'DELETE_SCHOOL_START';
export const DELETE_SCHOOL_SUCCESS = 'DELETE_SCHOOL_SUCCESS';
export const DELETE_SCHOOL_FAILED = 'DELETE_SCHOOL_FAILED';

export const deleteSchool = id => dispatch => {
    const token = localStorage.getItem('token');
    const reqOptions = {
        headers: {
            Authorization: token
        }
    }
    dispatch({ type: DELETE_SCHOOL_START })
        axios.delete(`https://luncher-app-backend.herokuapp.com/schools/${id}`, reqOptions)
        .then(res => dispatch({ type: DELETE_SCHOOL_SUCCESS, payload: res.data, id: id}))
        .catch(err => dispatch({ type: DELETE_SCHOOL_FAILED, payload: err}))
}
