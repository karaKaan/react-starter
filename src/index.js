import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { createTheme } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";

import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "./global.css";


const theme = createTheme({
  fontFamily: "inter,sans-serif",
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Notifications position="top-center" />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
