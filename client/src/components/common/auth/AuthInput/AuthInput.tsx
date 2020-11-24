import React, { Children } from "react";
import S from "./AuthInput.styled";

export interface AuthInputProps {
  label: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
function AuthInput({ label, ...rest }: AuthInputProps) {
  return (
    <S.AuthInputWrapper>
      <S.AuthInputLabel>{label}</S.AuthInputLabel>
      <S.AuthInput {...rest} />
    </S.AuthInputWrapper>
  );
}

export default AuthInput;
