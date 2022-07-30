import React, {useState, useEffect, useContext} from 'react'
import{ Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import handleLogin from '../customHandlers/handleLogin'
import history from '../history'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'

const AuthForm = () => {

  const meContext = useContext(MeContext)
  const [loginInfo, setLoginInfo] = useState({
    eMail: '',
    password: '',
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const handleRememberMe = () => {
    setRememberMe(prevState => {
      return !prevState
    })
  }

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setLoginInfo)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const [successStatus, message] = await handleLogin(meContext, loginInfo)
    //  successful
    if(rememberMe && successStatus) {
      localStorage.setItem('autoLogin', 'true')
    } else {
      localStorage.removeItem('autoLogin')
    }
    if(successStatus) {
      history.push('/home')
      return
    }
    //  else fail case
    setError(message)
    setAttemptsCounter(prev => prev + 1)
  }

  useEffect(() => {
    if(
      localStorage.hasOwnProperty('autoLogin')
      && localStorage.hasOwnProperty('psfMe')
      && (JSON.parse(localStorage.getItem('psfMe')).username)) {
        const user = {username: meContext.username, type: meContext.type, id: meContext.id}
        localStorage.setItem('psfMe', JSON.stringify(user))
        history.push('/home')
    }
  }, [])

  return (
    <div className='login'>
      <div className='login-wide'>
        <div >
          <h2>Login</h2>
          {!error && <h5>Login Information</h5>}
          {error && <h6 className='required'>Email or Password is incorrect. Try Again</h6>}
          <form onSubmit={handleSubmit} onChange={handleChange}>

              <div className='login__container'>
                <div>
                  <label htmlFor="eMailLogin" className='required'>Email</label>
                  <input id='eMailLogin'
                    name="eMail"
                    type="email"
                    value={loginInfo.eMail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="passwordLogin" className='required'>Password</label>
                  <input id='passwordLogin'
                    name="password"
                    type="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input id='rememberMe' className='auth__remMe__checkbox' onChange={handleRememberMe} type="checkbox" name="rememberMe" checked={rememberMe}/>
                  <label htmlFor="auth__remMe" className='auth__remMe'>Remember Me</label>
                </div>
              </div>
              <div className='buttonsWrapper'>
                <button className='buttonStyle2' type='submit'>Submit </button>
              </div>


          </form>
        </div>
        <div className='login__extras'>
          <div>
            <p>Don't have an account?</p>
            <Link to='/waitingListForm'>
              <button className='buttonStyle2'><h2>Sign Up</h2></button>
            </Link>
          </div>
          <div >
            <Link to='home'>
              Forgot Password?
            </Link>
          </div>
        </div>

      </div>
    </div>
  )}
export default AuthForm
