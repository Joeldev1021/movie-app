import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContext from "./context/AuthContext";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <AuthContext>
      <App />
    </AuthContext>
  </BrowserRouter>,
  document.getElementById("root")
);
