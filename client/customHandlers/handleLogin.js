import axios from 'axios'

//  meContext arg a context provider for the current user
// it tells the app who the user is, what type they are, and what to show them

const handleLogin = async ( meContext, loginInfo) => {

  const loginAndGetToken = async(loginInfo) => {
    const success = true
    try {
      const {data} = await axios.post('/auth/login', loginInfo)
      if (data) {
        const token = data.token
        localStorage.setItem('psfToken', token)
        return [success, token]
      }
      return[!success, '']
    } catch (err) {
      console.log(err)
      return [!success, err.message]
    }
  }

  const setMe = async (token) => {
    const success = true
    try {
      const {data} = await axios.get('/auth/me', {
        headers: {
          authorization: token
        }
      })
      if(data) {
        meContext.setEmail(data.eMail)
        meContext.setType(data.type)
        meContext.setId(data.id)
        localStorage.setItem('psfMe', JSON.stringify({
          eMail: data.eMail,
          type: data.type,
          id: data.id
        }))
        return success
      }
    } catch (err) {
        console.log(err)
        return !success
    }
  }


  let token = null
  let message = ''
  const [success, msg] = await loginAndGetToken(loginInfo)

  if(success && msg) {
    //  success and set token
    token = msg
  } else if (success && !msg) {
    //  fail with no error
    message = 'Login unsuccessful'
  } else {
    //  fail with error
    message = msg
  }

  if(token) {
    let successful = await setMe(token)
    if(successful) {
      //  user type and id set to MeContext / Login Successful
      message = 'login successful'
      return [true, message]
    } else {
      //  see message below. This should never happen
      message = 'Login successful but set me by token failed'
      return [false, message]
    }
  } else {
    //  Login attempt failed pre token
    return [false, message]
  }
}

export default handleLogin
