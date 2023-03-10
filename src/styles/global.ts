import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    isolation: isolate;
  }

  @media(max-width: 960px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media(max-width: 600px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #121214;
  }

  a,
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;