import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/auth/:form" component={Auth}></Route>
         <Route exact path="/dashboard" component={Dashboard}></Route>
       </Switch>
    </div>
  );
}

export default App;
