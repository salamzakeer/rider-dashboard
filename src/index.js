import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastProvider } from "react-toast-notifications";
import { AuthProvider } from "./state/Auth";
import reducer, { initialState } from "./state/Authreducer";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={reducer}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
