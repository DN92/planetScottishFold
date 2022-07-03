import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
// import '../public/App.css';
import App from './components/App'

//  This is the User Object on the frontEnd. The getMe function sets the context from the login page.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <App />
  // </React.StrictMode>
);
