const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


const includeSupabase = (req, res, next) => {
  try{
    req.supabase = supabase
    next()
  } catch(err) {
    res.send({msg: 'error in supabase middleware', err: err})
  }
}

module.exports = includeSupabase
