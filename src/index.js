import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./redux/store";
import { ProSidebarProvider } from "react-pro-sidebar";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter basename="test-task-sameit">
            <ProSidebarProvider>
              <App />
            </ProSidebarProvider>
          </BrowserRouter>
        {/* </PersistGate>
      </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
