import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "App";
import themeObj from "assets/theme";

const theme = createTheme(themeObj);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
