import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif;
  }

  button{
    cursor: pointer;
  }

  body{
    &::-webkit-scrollbar {
      width: 8px; /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
      height: 30%; /* 스크롤바의 길이 */
      background: ${({ theme }: any) => theme.color.teal}; /* 스크롤바의 색상 */

      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) =>
        theme.color.lightBeige}; /* 스크롤바의 색상 */
    }
  }

`;

export default GlobalStyle;
