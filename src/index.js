import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Providers from "./contexts/provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Providers> */}
    <App />
    {/* </Providers>
    </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
