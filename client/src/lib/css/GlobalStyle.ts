import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { flexColumnSetting, flexRowSetting } from "./Mixin";
import { mainColor } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    #root{
        width: 100vw;
        height: 100vh;
    }

    body {
        ${flexRowSetting};
        @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
        font-family: 'Mulish', sans-serif;
        font-size: 35px;
      
        box-sizing: border-box;
        background-color: ${mainColor.lime0};
        
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    button,input:focus{
        outline: none;
    }
`;
