import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { GET_SKILLS_REQUEST } from "./actionTypes";
import { getSkillsFailure, getSkillsSuccess } from "./actions";
import api from "../../services/api";

function* getSkills() {
  try {
    const response = yield call(() => api.get("/skill/all"));
    console.log(response);
    yield put(getSkillsSuccess(response.data));
  } catch (error) {
    yield put(getSkillsFailure());
  }
}
export default function* themeSagas() {
  yield all([takeLatest(GET_SKILLS_REQUEST, getSkills)]);
}
