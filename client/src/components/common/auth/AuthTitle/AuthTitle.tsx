import React from "react";
import S from "./AuthTitle.styled";

interface AuthTitleProp {
  children: string;
}

function AuthTitle(props: AuthTitleProp) {
  return <S.authTitle>{props.children}</S.authTitle>;
}

export default AuthTitle;
