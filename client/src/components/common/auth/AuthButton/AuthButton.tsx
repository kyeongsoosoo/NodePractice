import React, { Children } from "react";
import S from "./AuthButton.styled";

interface AuthButtonProps {
  children: React.ReactNode | string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function AuthButton(props: AuthButtonProps) {
  return (
    <S.AuthButtonWrapper onClick={props.onClick} type="submit">
      {props.children}
    </S.AuthButtonWrapper>
  );
}

export default AuthButton;
