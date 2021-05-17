import { fork, all } from "redux-saga/effects";

import themeSagas from "./Theme/sagas";

export default function* rootSagas() {
  yield all([fork(themeSagas)]);
}
