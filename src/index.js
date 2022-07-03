import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToastProvider } from "react-toast-notifications";
import { AuthProvider } from "./state/Auth";
import reducer, { initialState } from "./state/Authreducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={reducer}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>
);
