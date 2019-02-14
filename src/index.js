import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
      margin:0;
      padding:0;
      box-sizing: inherit;
      font-family: inherit;
      user-select: inherit;
    }

    body {
      box-sizing: border-box;
      font-family: "Raleway"
    }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
