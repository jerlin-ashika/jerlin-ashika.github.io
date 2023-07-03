import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export default function Store(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    preloadedState,
  });
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../Redux/rootReducer", () =>
      store.replaceReducer(rootReducer)
    );
  }
  return store;
}
