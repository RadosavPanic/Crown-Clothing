import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 20px 40px;
  font-family: "Open Sans Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

@media screen and (max-width: 600px){
  body {
    padding: 20px;
  }
}

@media screen and (max-width: 400px){
  body {
    padding: 20px 10px;
  }
}

`;
