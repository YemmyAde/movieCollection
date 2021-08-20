import React, { useState, useEffect } from "react";
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import loginAsync from "../redux/actions/loginAction";
import IsAuth from "./isAuth";
import Header from "./header";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState('')


  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };

  const state = useSelector((state) => state.login);

  const submitLogin = (e) => {
    e.preventDefault();
    if(loginInfo.username ==='' || loginInfo.password === ''){
      return (setMessage('Fill in all fields'))
    }
    else{
    dispatch(loginAsync(loginInfo));
    history.push('/')
  }
  };



 // redirect users to home page after login
  // useEffect(() => {
  //   if (IsAuth) {
      
  //   }
  // }, [])

  return (
    <div>
       <Header />
    <div className='background'>
     <div className='login'>
       <div className='center'> 
       <h3 className='title'>Login</h3>
        </div>
          <form>
            
              <input
                name="username"
                value={loginInfo.username}
                onChange={handleInput}
                autoComplete="off"
                type="text"
                placeholder="Enter Username"
                id="login-username"
                className='formInput'
              />
           
              <input
                name="password"
                value={loginInfo.password}
                onChange={handleInput}
                autoComplete="off"
                type='password'
                placeholder="Enter password"
                id="login-password"
                className='formInput'
              />
              <div className='center text'> 
              <p className='size'> {message}  </p>
              </div>
            <button
              type="submit"
              onClick={submitLogin}
              className='submitButton'
            >
              Login
            </button>
          </form>
          <div className='center text'> 
        <span>
        <p className='size'> Already have an account? </p>
        </span>
          <Link to="/sign-up"> <span className='size link'>Signup </span></Link>
       
        </div>
    </div>
    </div>
    </div>
  );
};
export default Login;
