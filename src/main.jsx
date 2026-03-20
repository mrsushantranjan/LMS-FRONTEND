import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ClerkProvider } from '@clerk/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </BrowserRouter>
);