import { all, fork } from "redux-saga/effects";
import StaticSaga from "./StaticData/saga";

export default function* rootSaga() {
  yield all([fork(StaticSaga)]);
}
