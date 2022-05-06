import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { theme } from "./App/theme";
import GlobalStyle from "./GlobalStyle";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
