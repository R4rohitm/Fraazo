import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// <<<<<<< HEAD
// =======

// >>>>>>> 891550875935c9204a9528053b02be1faf106856
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>
);
