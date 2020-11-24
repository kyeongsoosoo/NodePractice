import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import authTemplate from "./common/auth/AuthTemplate/AuthTemplate";
import Login from "./login/login";
import Register from "./register/Register";
import { RootState } from "../module";
import MainPage from "../pages/MainPage";
import { getAuthActions } from "../module/user/action";

function Routes() {
  const data = useSelector((state: RootState) => state.user.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthActions.request("get Auth"));
  }, []);
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          if (data) {
            return data.isAuth ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/login" />
            );
          }
        }}
      />
      <Route path="/home" component={MainPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  );
}

export default Routes;
