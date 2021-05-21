import { fork, all } from "redux-saga/effects";

import themeSagas from "./Theme/sagas";
import skillSagas from "./Skills/sagas";
import projectSagas from "./Projects/sagas";

export default function* rootSagas() {
  yield all([fork(themeSagas), fork(skillSagas), fork(projectSagas)]);
}
