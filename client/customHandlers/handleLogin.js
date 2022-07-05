import axios from 'axios'


const handleLogin = async ( meContext, loginInfo) => {

  const loginAndGetToken = async(loginInfo) => {
    let success = true
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
      return [!success, 'error']
    }
  }


  const setMe = async (token) => {
    let success = true
    try {
      const {data} = await axios.get('/auth/me', {
        headers: {
          authorization: token
        }
      })
      if(data) {
        console.log('from inside handle submit ', data)
        meContext.setUsername(data.username)
        meContext.setType(data.type)
        meContext.setId(data.id)
        console.log(meContext)
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
    let good = await setMe(token)
    if(good) {
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
