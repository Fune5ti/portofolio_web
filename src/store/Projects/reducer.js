import {
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_FAILURE,
} from "./actionTypes";

const INITIAL_STATE = {
  error: false,
  loading: false,
  items: null,
};

export default function skills(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { ...state, loading: true };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload,
      };
    case GET_PROJECTS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
