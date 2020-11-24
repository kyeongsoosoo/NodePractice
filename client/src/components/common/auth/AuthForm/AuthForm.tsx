import React, { Children } from "react";
import S from "./AuthForm.styled";

export interface AuthFormProps {
  children: React.ReactNode;
}
function AuthForm(props: AuthFormProps) {
  return <S.AuthFormWrapper>{props.children}</S.AuthFormWrapper>;
}

export default AuthForm;
