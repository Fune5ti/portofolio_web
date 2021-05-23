import {
  CHANGE_THEME_SUCCESS,
  CHANGE_THEME_REQUEST,
  CHANGE_THEME_FAILURE,
} from "./actionTypes";
import { darkTheme } from "../../theme/colors";

const INITIAL_STATE = {
  error: false,
  loading: false,
  currentTheme: localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme"))
    : darkTheme,
};

export default function theme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME_REQUEST:
      return { ...state, loading: true };
    case CHANGE_THEME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentTheme: action.payload,
      };
    case CHANGE_THEME_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
