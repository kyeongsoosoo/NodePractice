import styled from "styled-components";
import { flexColumnSetting, flexRowSetting } from "../../../../lib/css/Mixin";
import { mainColor } from "../../../../lib/css/Theme";

const authTemplateWrapper = styled.div`
  ${flexColumnSetting};

  background-color: ${mainColor.lime0};
  width: 70vw;
  height: 80vh;
  margin: auto auto;
  border-radius: 10%;
`;

export default {
  authTemplateWrapper,
};
