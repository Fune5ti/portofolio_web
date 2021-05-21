import {
  GET_PROJECTS_FAILURE,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
} from "./actionTypes";

export const getProjectsFailure = () => ({
  type: GET_PROJECTS_FAILURE,
});
export const getProjectsRequest = () => ({
  type: GET_PROJECTS_REQUEST,
});
export const getProjectsSuccess = (payload) => ({
  type: GET_PROJECTS_SUCCESS,
  payload,
});
