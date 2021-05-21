import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { GET_PROJECTS_REQUEST } from "./actionTypes";
import { getProjectsFailure, getProjectsSuccess } from "./actions";
import api from "../../services/api";

function* getProjects() {
  try {
    const response = yield call(() => api.get("/project/all"));
    yield put(getProjectsSuccess(response.data));
  } catch (error) {
    yield put(getProjectsFailure());
  }
}
export default function* themeSagas() {
  yield all([takeLatest(GET_PROJECTS_REQUEST, getProjects)]);
}
