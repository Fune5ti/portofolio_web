import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    transition: 0.4s;
    line-height: 1.3;
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
    font-size: 16px;
    background-color: ${(props) => props.theme.backgroundPrimary};
    p{
      color:${(props) => props.theme.fontSecondary};
    }
    h1,h2,h3{
      color:${(props) => props.theme.fontPrimary};
    }
  }
  ::-webkit-scrollbar {
    display: none;
}
  div#root{
    width:100%;
    height: 100%;
  }
`;
export default GlobalStyle;
