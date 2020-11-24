import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import user, { userSaga } from "./user/user";

const rootReducer = combineReducers({ user });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga()]);
}
