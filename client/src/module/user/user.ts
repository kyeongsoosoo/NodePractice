import { AxiosError } from "axios";

import { createReducer } from "typesafe-actions";
import { takeEvery } from "redux-saga/effects";

import { AUTH, AUTH_FAILURE, AUTH_SUCCESS } from "./action";
import { UserAction } from "./type";
import { getUserSaga } from "./saga";

type UserState = {
  data: userType | null;
  error: AxiosError | null;
};

const initialState: UserState = {
  data: null,
  error: null,
};

const user = createReducer<UserState, UserAction>(initialState, {
  [AUTH]: (state, action) => {
    console.log("test");
    return { ...state };
  },
  [AUTH_SUCCESS]: (state, action) => ({
    data: action.payload,
    error: null,
  }),
  [AUTH_FAILURE]: (state, action) => ({
    data: null,
    error: action.payload,
  }),
});

export default user;

export function* userSaga() {
  yield takeEvery(AUTH, getUserSaga);
}
