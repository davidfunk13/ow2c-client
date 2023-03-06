import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import MuiThemeProvider from "./providers/MuiThemeProvider/MuiThemeProvider";
import { store } from "./redux/store";

import createCache from "@emotion/cache";

import { CacheProvider } from "@emotion/react";

export const muiCache = createCache({
  key: "mui",
  prepend: true
});

const container = document.getElementById("root");

ReactDOM.createRoot(container as HTMLElement).render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
      <Provider store={store}>
        <MuiThemeProvider>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </Provider>
    </CacheProvider>
  </React.StrictMode>,
);
