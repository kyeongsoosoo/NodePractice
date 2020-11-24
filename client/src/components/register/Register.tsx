import React from "react";
import { useHistory } from "react-router";
import useInput from "../../hooks/useInput";
import { userClient } from "../../lib/client/client";
import AuthButton from "../common/auth/AuthButton/AuthButton";
import AuthForm from "../common/auth/AuthForm/AuthForm";
import AuthInput, { AuthInputProps } from "../common/auth/AuthInput/AuthInput";
import AuthTemplate from "../common/auth/AuthTemplate/AuthTemplate";
import AuthTitle from "../common/auth/AuthTitle/authTitle";

function Register() {
  const history = useHistory();

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
    input: password2,
    handleChange: handleCheck,
    handleReset: checkReset,
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
    const res = await userClient.register(payload);
    const reset = [nameReset, emailReset, passwordReset, checkReset];
    reset.map((func) => func());
    history.push("/login");
  };

  return (
    <AuthTemplate>
      <AuthTitle>Register</AuthTitle>
      <AuthForm>
        <AuthInput value={email} onChange={handleEmail} label={"Email"} />
        <AuthInput
          value={password}
          onChange={handlePass}
          type="password"
          label={"Password"}
        />
        <AuthInput
          value={password2}
          onChange={handleCheck}
          type="password"
          label={"Password Check"}
        />
        <AuthInput value={name} onChange={handleName} label={"Name"} />
        <AuthButton onClick={handleClick}> Register</AuthButton>
      </AuthForm>
    </AuthTemplate>
  );
}

export default Register;
