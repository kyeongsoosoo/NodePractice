import React, { Children } from "react";
import S from "./AuthTemplate.styled";

interface AuthTemplateProps {
  children: React.ReactNode;
}

function AuthTemplate(props: AuthTemplateProps) {
  return <S.authTemplateWrapper>{props.children}</S.authTemplateWrapper>;
}

export default AuthTemplate;
