const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const baseKey = process.env.SUPABASE_KEY ?? ''
const supabaseKey = process.env.SUPABASE_SERVICE_KEY ?? ''

console.log( 'url:: ', supabaseUrl)
console.log( 'key:: ', baseKey)

const includeSupabase = (req, res, next) => {
  try{
    console.log('auth', req.headers.Authorization)
    const supabase = createClient(supabaseUrl, supabaseKey, {
      global: {headers: {Authorization: ''}}
    })
    req.supabase = supabase
    next()
  } catch(err) {
    res.send({msg: 'error in supabase middleware', err: err})
  }
}

module.exports = includeSupabase
