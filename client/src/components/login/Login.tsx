import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useInput from "../../hooks/useInput";
import { userClient } from "../../lib/client/client";
import { getAuthActions } from "../../module/user/action";
import AuthButton from "../common/auth/AuthButton/AuthButton";
import AuthForm from "../common/auth/AuthForm/AuthForm";
import AuthInput, { AuthInputProps } from "../common/auth/AuthInput/AuthInput";
import AuthTemplate from "../common/auth/AuthTemplate/AuthTemplate";
import AuthTitle from "../common/auth/AuthTitle/authTitle";

function Login() {
  const history = useHistory();

  const dispatch = useDispatch();

  const {
    input: email,
    handleChange: handleEmail,
    handleReset: emailReset,
  } = useInput();
  const {
    input: password,
    handleChange: handlePass,
    handleReset: passwordReset,
  } = useInput();
  const {
    input: name,
    handleChange: handleName,
    handleReset: nameReset,
  } = useInput();

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const payload = { email, password, name };
    const res = await userClient.login(payload);
    const reset = [nameReset, emailReset, passwordReset];
    reset.map((func) => func());
    dispatch(getAuthActions.request("get Auth"));
    console.log("hi");
  };
  return (
    <AuthTemplate>
      <AuthTitle>Login</AuthTitle>
      <AuthForm>
        <AuthInput value={email} onChange={handleEmail} label={"Email"} />
        <AuthInput
          value={password}
          onChange={handlePass}
          type="password"
          label={"Password"}
        />
        <AuthInput value={name} onChange={handleName} label={"Name"} />
        <AuthButton onClick={handleClick}>LogI n</AuthButton>
      </AuthForm>
    </AuthTemplate>
  );
}

export default Login;
