import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */

    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  body {
    ${({ theme }) => css`
      height: auto;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.colors.background};
    `}
  }

  body, #root {
    min-height: 100vh;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #root {
    height: 100%;
  }

  body, input, button {
    font-family: 'Montserrat', serif;
    font-size: 1.6rem;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.48;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;