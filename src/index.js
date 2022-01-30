import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppState } from "./Appstate";

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <Router>
        <Route path="/" component={App}></Route>
      </Router>
    </AppState>
  </React.StrictMode>,
  document.getElementById("root")
);
