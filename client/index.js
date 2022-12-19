import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import { MeProvider } from './MeContextPro'
// import SessionContextProvider from '@supabase/auth-helpers-react'
// import { createClient } from  '@supabase/supabase-js'

// const supabaseURL = "https://jfbyqhzzothodtxblxdi.supabase.co"
// const supabasePublicKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYnlxaHp6b3Rob2R0eGJseGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzOTQ3MjQsImV4cCI6MTk4Njk3MDcyNH0.YzAavCV038eiG4271h1G1sNYqGflr240hb88j-_MLcI"
// const supabaseClient = createClient(supabaseURL, supabasePublicKey)

//  This is the User Object on the frontEnd. The getMe function sets the context from the login page.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SessionContextProvider supabaseClient={supabaseClient}> */}
      <MeProvider>
        <App className="App" />
      </MeProvider>
    {/* </SessionContextProvider> */}
  </React.StrictMode>
);
