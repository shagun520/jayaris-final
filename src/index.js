import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App1 from "./App1"; // assuming App1 is your main app file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/jayaris-final">
    <App1 />
  </BrowserRouter>
);
