import styled from "styled-components";
import { flexColumnSetting } from "../../../../lib/css/Mixin";

const authTitle = styled.div`
  ${flexColumnSetting};
  width: 70%;
  height: 20%;
  font-size: 60px;
  line-spacing: 1.5;
  text-decoration: underline;
`;

export default {
  authTitle,
};
