import React, {useState, createContext, useContext} from 'react'
import{ Link } from 'react-router-dom'
import axios from 'axios'
import MeContext from '../MeContextPro'

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
    localStorage.removeItem('psfToken')
    console.log('submit')
    const {data} = await axios.post('/auth/login', loginInfo)
    const token = data.token
    console.log('TOKEN:: ', token)
    console.log(meContext)
    const data2 = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    console.log('me::', data2.data)

    meContext.setUsername(data2.data.username)
    meContext.setType(data2.data.type)
    meContext.setId(data2.data.id)
    console.log(meContext)
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

export default AuthForm
