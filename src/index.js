import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';//importing bootstrap styles
import './index.css';//importing my  styles
import App from './App';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


