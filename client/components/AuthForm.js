import React, {useState} from 'react'
import{ Link } from 'react-router-dom'

const AuthForm = () => {

  const [loginInfo, setLoginInfo] = useState({
    userName: '',
    password: '',
  })

  const handleChange = (event) => {
    setLoginInfo(prevClientInfo => {
      return {...prevClientInfo, [event.target.name] : event.target.value}
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <div >
      <div >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
              id="login"
              name="userName"
              placeholder={
                  "User Name"
              }
              type="text"
              value={loginInfo.userName}
              onChange={handleChange}
            />
            <input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              value={loginInfo.password}
              onChange={handleChange}
            />
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
  );
}

export default AuthForm
