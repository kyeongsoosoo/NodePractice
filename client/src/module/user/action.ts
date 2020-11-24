import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const AUTH = "user/auth";
export const AUTH_SUCCESS = "user/authSuccess";
export const AUTH_FAILURE = "user/authFailure";

export const getAuthActions = createAsyncAction(
  AUTH,
  AUTH_SUCCESS,
  AUTH_FAILURE
)<String, userType, AxiosError>();

export const actions = { getAuthActions };
