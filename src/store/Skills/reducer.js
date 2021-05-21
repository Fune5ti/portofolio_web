import {
  GET_SKILLS_FAILURE,
  GET_SKILLS_SUCCESS,
  GET_SKILLS_REQUEST,
} from "./actionTypes";

const INITIAL_STATE = {
  error: false,
  loading: false,
  items: null,
};

export default function skills(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SKILLS_REQUEST:
      return { ...state, loading: true };
    case GET_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload,
      };
    case GET_SKILLS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
