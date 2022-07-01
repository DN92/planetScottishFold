import React, {useState} from 'react'
import{ Link } from 'react-router-dom'
import { getUserIP } from '../../myUtilFuncs'
import axios from 'axios'

const AuthForm = () => {

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
    eMail: '',
    city: '',
    state: '',
  })

  const handleChange = (event) => {
    setLoginInfo(prevClientInfo => {
      return {...prevClientInfo, [event.target.name] : event.target.value}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submit')
    loginInfo.IPaddress = await getUserIP()
    const {data} = await axios.post('/auth/login', loginInfo)
    console.log('TOKEN:: ', data)
    // localStorage.setItem
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
          {/* <input
            type="text"
            name="eMail"
            placeholder='E Mail'
            value={loginInfo.eMail}
            onChange={handleChange}
          /> <br />
          <input
            type="text"
            name='city'
            placeholder='City'
            value={loginInfo.city}
            onChange={handleChange}
          /> <br />
          <input
            type="text"
            name='state'
            placeholder='State'
            value={loginInfo.state}
            onChange={handleChange}
          /> <br /> */}
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
  );
}

export default AuthForm
