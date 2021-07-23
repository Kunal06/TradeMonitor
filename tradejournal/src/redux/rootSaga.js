import { all, call } from "redux-saga/effects";
import userSagas from "./User/user.sagas";
import postsSagas from "./Posts/posts.sagas";

export default function* rootSaga() {
    yield all([call(userSagas), call(postsSagas)]);
}
