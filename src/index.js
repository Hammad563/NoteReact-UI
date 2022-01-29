import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { AppState } from './Appstate';


ReactDOM.render(
  <React.StrictMode>
   <AppState>
    <Router>
        <App/>
      </Router>
   </AppState>
  </React.StrictMode>,
  document.getElementById('root')
);

