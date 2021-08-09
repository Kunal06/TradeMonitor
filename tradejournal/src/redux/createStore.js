import { createStore, applyMiddleware } from "redux";
import createSagaMiddle from "redux-saga";
/*
Redux-Saga is a library that aims to make application side effects 
(i.e. asynchronous things like data fetching and impure things like 
accessing the browser cache) easier to manage, more efficient to execute, 
easy to test, and better at handling failures. Redux-Saga basically is a 
middleware for your Redux.
*/

import logger from "redux-logger";
/*
LogRocket is a production Redux logging tool that lets you replay problems 
as if they happened in your own browser. Instead of guessing why errors happen,
 or asking users for screenshots and log dumps, LogRocket lets you replay Redux 
 actions + state, network requests, console logs, and see a video of what the 
 user saw. 
*/
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
/*
Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises
Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned
*/
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddle();
export const middlewares = [sagaMiddleware, logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
