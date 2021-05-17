import {
  CHANGE_THEME_FAILURE,
  CHANGE_THEME_REQUEST,
  CHANGE_THEME_SUCCESS,
} from "./actionTypes";

export const changeThemeFailure = (payload) => ({
  type: CHANGE_THEME_FAILURE,
  payload,
});
export const changeThemeRequest = (payload) => ({
  type: CHANGE_THEME_REQUEST,
  payload,
});
export const changeThemeSuccess = (payload) => ({
  type: CHANGE_THEME_SUCCESS,
  payload,
});
