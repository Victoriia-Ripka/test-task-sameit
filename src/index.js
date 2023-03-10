import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
// import { store } from "./redux/store.js";
// import { Provider } from "react-redux";
import { ProSidebarProvider } from "react-pro-sidebar";
import theme from "./theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="test-task-sameit">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ProSidebarProvider>
            <App />
          </ProSidebarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
