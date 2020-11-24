import styled from "styled-components";
import { mainColor } from "../../../../lib/css/Theme";

const AuthButtonWrapper = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 10%;
  background-color: ${mainColor.lime2};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default {
  AuthButtonWrapper,
};
