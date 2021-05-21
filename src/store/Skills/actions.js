import {
  GET_SKILLS_FAILURE,
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
} from "./actionTypes";

export const getSkillsFailure = () => ({
  type: GET_SKILLS_FAILURE,
});
export const getSkillsRequest = () => ({
  type: GET_SKILLS_REQUEST,
});
export const getSkillsSuccess = (payload) => ({
  type: GET_SKILLS_SUCCESS,
  payload,
});
