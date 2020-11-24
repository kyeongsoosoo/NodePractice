import styled from "styled-components";
import { mainColor } from "../../../../lib/css/Theme";

const AuthInputWrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const AuthInputLabel = styled.div`
  font-size: 1rem;
  color: ${mainColor.lime4};
  margin-bottom: 0.25rem;
`;

const AuthInput = styled.input`
  width: 100%;
  border: 1px solid ${mainColor.lime2};
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export default {
  AuthInput,
  AuthInputLabel,
  AuthInputWrapper,
};
