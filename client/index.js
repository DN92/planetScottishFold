import React from 'react';
import ReactDOM from 'react-dom/client';
const UserContext = React.createContext({
  username: null,
  type: 'guest'
})
// import '../public/App.css';
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <App />
  // </React.StrictMode>
);
