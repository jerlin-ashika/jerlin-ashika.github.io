import { changeDarkMode } from "./action";
import * as types from "./actionType";
import { all, fork, takeEvery, put } from "redux-saga/effects";
// import { useSelector } from "react-redux";

// const { darkMode } = useSelector((state) => state.darkMode);
// function* workDarkMode() {
//   console.log("function is comming to the worker saga");
//   yield put(changeDarkMode(true));
// }
// export function* WatchDarkMode() {
//   console.log("function is coming to watcher saga");
//   yield takeEvery(types.CHANGE_DARK_MODE, workDarkMode);
// }

function* StaticSaga() {
  yield all([]);
}
export default StaticSaga;
