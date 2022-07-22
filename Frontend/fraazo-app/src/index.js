import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// <<<<<<< HEAD
// import reportWebVitals from "./reportWebVitals";
// ======= 
// >>>>>>> 2d4f05807dc1aa7734f9a358b5bf60448c89a882
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>
);
