import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { CHANGE_THEME_REQUEST } from "./actionTypes";
import { changeThemeSuccess } from "./actions";

function* changeTheme({ payload }) {
  yield put(changeThemeSuccess(payload));
}
export default function* themeSagas() {
  yield all([takeLatest(CHANGE_THEME_REQUEST, changeTheme)]);
}
