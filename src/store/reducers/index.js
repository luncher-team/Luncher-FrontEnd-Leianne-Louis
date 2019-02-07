import {
  FETCH_SCHOOLS_START,
  FETCH_SCHOOLS_SUCCESS,
  FETCH_SCHOOLS_FAILED,
  CREATE_SCHOOL_START,
  CREATE_SCHOOL_SUCCESS,
  CREATE_SCHOOL_FAILED,
  FETCH_SCHOOL_SELECTED_START,
  FETCH_SCHOOL_SELECTED_SUCCESS,
  FETCH_SCHOOL_SELECTED_FAILED,
  UPDATE_SCHOOL_START,
  UPDATE_SCHOOL_SUCCESS,
  UPDATE_SCHOOL_FAILED,
  DELETE_SCHOOL_SUCCESS
} from "../actions";

const initailState = {
  schools: [],
  isGettingSchools: false,
  error: "",
  isCreatingSchool: false,
  selectedSchool: {},
  isUpdatingSchool: false
};

const rootReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_SCHOOLS_START:
      return {
        ...state,
        isGettingSchools: true,
        error: ""
      };
    case FETCH_SCHOOLS_SUCCESS:
      return {
        ...state,
        isGettingSchools: false,
        schools: action.payload,
        error: ""
      };
    case FETCH_SCHOOLS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_SCHOOL_START:
      return {
        ...state,
        isCreatingSchool: true
      };
    case CREATE_SCHOOL_SUCCESS:
      console.log(state.schools)
      return {
        ...state,
        schools: [
            ...state.schools.data,
            action.payload
        ],
        isCreatingSchool: false
      };
    case CREATE_SCHOOL_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_SCHOOL_SELECTED_START:
      return {
        ...state,
        isSelectingSchool: true,
        error: ""
      };
    case FETCH_SCHOOL_SELECTED_SUCCESS:
      return {
        ...state,
        selectedSchool: action.payload,
        isSelectingSchool: false,
        error: ""
      };
    case FETCH_SCHOOL_SELECTED_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_SCHOOL_START:
      return {
          ...state,
          isUpdatingSchool: true,
          error: ''
      }
    case UPDATE_SCHOOL_SUCCESS:
      return {
          ...state,
          schools: action.payload.data,
          isUpdatingSchool: false,
          error: ''
      }
    case UPDATE_SCHOOL_FAILED:
      return {
          ...state,
          error: action.payload
      }
    case DELETE_SCHOOL_SUCCESS:
    const school = state.schools.data.filter(school => school.id !== action.id)
      return {
          ...state,
          schools: school
      }
    default:
      return state;
  }
};

export default rootReducer;
