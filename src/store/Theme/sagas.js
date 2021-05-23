import { all, takeLatest, put } from "redux-saga/effects";
import { CHANGE_THEME_REQUEST } from "./actionTypes";
import { changeThemeSuccess } from "./actions";

function* changeTheme({ payload }) {
  yield put(changeThemeSuccess(payload));
  localStorage.setItem("theme", JSON.stringify(payload));
}
export default function* themeSagas() {
  yield all([takeLatest(CHANGE_THEME_REQUEST, changeTheme)]);
}
