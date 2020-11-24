import { userClient } from "../../lib/client/client";
import { getAuthActions } from "./action";

import { call, put } from "redux-saga/effects";

export function* getUserSaga() {
  try {
    const data = yield call(userClient.auth);
    yield put(getAuthActions.success(data));
    console.log(data);
  } catch (e) {
    yield put(getAuthActions.failure(e));
  }
}
