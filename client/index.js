import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import { MeProvider } from './MeContextPro'

//  This is the User Object on the frontEnd. The getMe function sets the context from the login page.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MeProvider>
      <App className="App" />
    </MeProvider>
  </React.StrictMode>
);
