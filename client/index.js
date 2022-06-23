import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
// import '../public/App.css';
import history from './history'
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router history = {history}> */}
      <App />
    {/* </Router> */}
  </React.StrictMode>
);
