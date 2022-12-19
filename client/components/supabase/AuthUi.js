import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'

const supabaseURL = "https://jfbyqhzzothodtxblxdi.supabase.co"
const supabasePublicKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmYnlxaHp6b3Rob2R0eGJseGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzOTQ3MjQsImV4cCI6MTk4Njk3MDcyNH0.YzAavCV038eiG4271h1G1sNYqGflr240hb88j-_MLcI"
const supabase = createClient(supabaseURL, supabasePublicKey)

const AuthUI = () => {


  return (
    <Auth
      supabaseClient={supabase}
      appearance={{theme: ThemeSupa}}
    />

  )
}


export default AuthUI
