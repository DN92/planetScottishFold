import React, {useState, useContext} from 'react'
import{ Link } from 'react-router-dom'
import axios from 'axios'
import MeContext from '../MeContextPro'
import handleLogin from '../customHandlers/handleLogin'
import history from '../history'

const AuthForm = () => {

  const meContext = useContext(MeContext)
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    setLoginInfo(prevClientInfo => {
      return {...prevClientInfo, [event.target.name] : event.target.value}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const [successStatus, message] = await handleLogin(meContext, loginInfo)
    console.log('successStatus?: ', successStatus )
    console.log('message:  ', message)
    console.log(meContext)
    if(successStatus) {
      history.push('home')
    }
  }

  return (
    <div >
      <div >
        <h2>Login</h2>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input
            name="username"
            placeholder="User Name"
            type="text"
            value={loginInfo.username}
            onChange={handleChange}
          /> <br />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={loginInfo.password}
            onChange={handleChange}
          /> <br />
          <button type='submit'>Submit </button>
        </form>
      </div>
      <hr />

      <div >
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
      <hr />

      <div>
        <p>Don't have an account?</p>
        <h2><Link to="/signup">Sign Up</Link></h2>
      </div>
    </div>
  )}
  //  TODO change link sign up to reroute to client questionnaire

export default AuthForm
