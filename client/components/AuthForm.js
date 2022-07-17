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
    <div >
      <div >
        <h2>Login</h2>
        {!error && <h6>login page</h6>}
        {error && <h6>Email or Password is incorrect. Try Again</h6>}
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input
            name="eMail"
            placeholder="E Mail"
            type="email"
            value={loginInfo.eMail}
            onChange={handleChange}
          /> <br />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={loginInfo.password}
            onChange={handleChange}
          /> <br />
          <input onChange={handleRememberMe} type="checkbox" name="rememberMe" checked={rememberMe}/>
          <label htmlFor="rememberMe">Remember Me</label> <br />
          <button type='submit'>Submit </button>
        </form>
      </div>
      <div >
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>

      <div>
        <p>Don't have an account?</p>
        <h2><Link to="/signup">Sign Up</Link></h2>
      </div>
    </div>
  )}
  //  TODO change link sign up to reroute to client questionnaire

export default AuthForm
