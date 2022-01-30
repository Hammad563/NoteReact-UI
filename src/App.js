import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useAppState } from "./Appstate";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App(props) {
  const { state, dispatch } = useAppState();

  useEffect(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    if (auth) {
      dispatch({ type: "auth", payload: auth });
      props.history.push("/dashboard");
      //window.location = window.location.host + '/dashboard'
    } else {
      props.history.push("/");
    }
  }, []);

  return (
    <div className="App">
      <Route path="/" component={Navbar}></Route>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/auth/:form" component={Auth}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
