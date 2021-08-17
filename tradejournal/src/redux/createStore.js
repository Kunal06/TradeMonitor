import { createStore, applyMiddleware } from "redux";
import createSagaMiddle from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [sagaMiddleware, logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
