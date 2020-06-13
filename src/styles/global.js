import { createGlobalStyle } from 'styled-components';
import '~/assets/css/fonts.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: #fff;
    background-color:#25282A;
  }

  body, input, button {
    font: 14px 'Core Sans', sans-serif;
  }

  a {
    text-decoration: none;
    transition: all ease-out 0.1s;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
