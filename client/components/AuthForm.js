import React, {useState, useEffect, useContext} from 'react'
import{ Link, useNavigate } from 'react-router-dom'
import MeContext from '../MeContextPro'
import handleLogin from '../customHandlers/handleLogin'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'
import { Helmet } from 'react-helmet'

const AuthForm = () => {

  const navigate = useNavigate()
  const meContext = useContext(MeContext)
  const [loginInfo, setLoginInfo] = useState({
    eMail: '',
    password: '',
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [willAttemptLogin, setWillAttemptLogin] = useState(false)
  const [error, setError] = useState('')

  const login = async () => {
    const [successStatus, message] = await handleLogin(meContext, loginInfo)
    //  successful
    if(rememberMe && successStatus) {
      localStorage.setItem('autoLogin', 'true')
    } else {
      localStorage.removeItem('autoLogin')
    }
    if(successStatus) {
      navigate('/home')
      return
    }
    //  else fail case
    setError(message)
  }

  const handleRememberMe = () => {
    setRememberMe(prevState => {
      return !prevState
    })
  }

  const handleChange = (event) => {
    setError('')
    handleControlledValueFieldToState(event, setLoginInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoginInfo(loginInfo => ({...loginInfo, eMail: loginInfo.eMail.toLowerCase()}))
    setWillAttemptLogin(true)

  }

  useEffect(() => {
    if(
      localStorage.hasOwnProperty('autoLogin')
      && localStorage.hasOwnProperty('psfMe')
      && (JSON.parse(localStorage.getItem('psfMe')).username)) {
        const user = {username: meContext.username, type: meContext.type, id: meContext.id}
        localStorage.setItem('psfMe', JSON.stringify(user))
        navigate('/home')
    }
  }, [])

  useEffect(() => {
    if(willAttemptLogin) {
      setWillAttemptLogin(false)
      login()
    }
  }, [willAttemptLogin])

  return (
    <>
      <Helmet>
          <title>Planet Scottish Fold | Login Page</title>
          <meta name='Planet Scottish Fold' contents='Proud Breeders of Scottish Fold Kittens' />
          <link ref='canonical' href='/login' />
      </Helmet>
      <div className='login'>
            {!error && <h4 className='login__h4'>Sign in to Planet Scottish Fold</h4>}
        <div className='login-wrapper'>
          <h2 className='visually-hidden'>Login</h2>
          <div >
            {error && <h6 className='required'>Email or Password is incorrect. Try Again</h6>}
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <div className='login__container'>
                <div className='login__container__div'>
                  <div className='input-labels-wrapper'>
                    <label htmlFor="eMailLogin" className='required'>Email Address</label>
                  </div>
                  <div className='login__input-wrapper'>
                    <input id='eMailLogin'
                      name="eMail"
                      type="email"
                      value={loginInfo.eMail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='login__container__div'>
                  <div className='input-labels-wrapper'>
                    <label htmlFor="passwordLogin" className='required'>Password</label>
                    <Link id='link-forgotPass' to='/home'>
                      Forgot Password?
                    </Link>
                  </div>
                  <input id='passwordLogin'
                    name="password"
                    type="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='remMe-wrapper'>
                  <input id='rememberMe' className='auth__remMe__checkbox' onChange={handleRememberMe} type="checkbox" name="rememberMe" checked={rememberMe}/>
                  <label htmlFor="auth__remMe" className='auth__remMe'>Remember Me</label>
                </div>
                <div className='login-container__div'>
                  <button id='sign-in-button' className='buttonStyle3' type='submit'>Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='login-wrapper no-account'>
          <p>Don't have an account? <Link id='signUp-link' to='/waitingListForm'>Sign Up</Link></p>
        </div>
      </div>
    </>
  )}
export default AuthForm
