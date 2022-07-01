import React from 'react'
import{ Link } from 'react-router-dom'

const AuthForm = () => {

  return (
    <div className="LoginContainer">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2
            className={
              window.location.pathname === "/login"
                ? "active"
                : "inactive underlineHover"
            }
          >
            <Link to="/login">Login</Link>
          </h2>
          <h2
            className={
              window.location.pathname === "/signup"
                ? "active"
                : "inactive underlineHover"
            }
          >
            <Link to="/signup">Sign Up</Link>
          </h2>

          <form onSubmit={handleSubmit} name={name}>
            <div className="loginentry">
              <input
                name="username"
                id="login"
                className="fadeIn second"
                placeholder={
                  window.location.pathname === "/signup" ? "Sign up" : "Login"
                }
                type="text"
              />
            </div>
            <div className="loginentry">
              <input
                name="password"
                id="password"
                className="fadeIn third"
                placeholder="password"
                type="password"
              />
            </div>
            <div className="loginentry">
              <button type="submit" className="fadeIn fourth">
                {displayName}
              </button>
            </div>

            {error && error.response && <div> {error.response.data} </div>}
          </form>
        </div>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
      <div >
        <img id="MASSMasscot" src="trasparentdino.png" />
      </div>
    </div>
  );
  )
}

export default AuthFrom
