import React, {useState, useEffect, useContext} from 'react'
import{ Link } from 'react-router-dom'
import MeContext from '../MeContextPro'
import handleLogin from '../customHandlers/handleLogin'
import history from '../history'
import handleControlledValueFieldToState from '../customHandlers/handleFormChange'

const AuthForm = () => {

  const meContext = useContext(MeContext)
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  })

  const handleChange = (event) => {
    handleControlledValueFieldToState(event, setLoginInfo)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const [successStatus, message] = await handleLogin(meContext, loginInfo)
    // if(successStatus) {
    //     history.push('/home')
    // }
  }

  const handleLoginFromStorage = () => {
    const {username, type, id} = JSON.parse(localStorage.getItem('psfMe'))
    meContext.setUsername(username)
    meContext.setType(type)
    meContext.setId(id)
  }

  useEffect(() => {
    console.log('boom')
    console.log(meContext)
    const user = {username: meContext.username, type: meContext.type, id: meContext.id}
    localStorage.setItem('psfMe', JSON.stringify(user))
    // history.push('/home')
  }, [meContext])

  useEffect(()=>{
    console.log('loaded in')
    if(localStorage.getItem('psfMe')) {
      handleLoginFromStorage()
    }
  },[])

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
