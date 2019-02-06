import {
  FETCH_SCHOOLS_START,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILED
} from "../actions";

const initailState = {
    schools: [],
    isGettingSchools: false,
    error: ''
};

const rootReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_SCHOOLS_START:
        return {
            ...state,
            isGettingSchools: true,
            error: ''
        }
    case FETCH_SCHOOLS_SUCCESS:
        return {
            ...state,
            isGettingSchools: false,
            schools: action.payload,
            error: ''
        }
    case FETCH_SCHOOLS_FAILED:
        return {
            ...state,
            error: action.payload
        }
    default:
      return state;
  }
};

export default rootReducer;
