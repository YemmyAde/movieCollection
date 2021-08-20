import React, { useState, useEffect } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import signupAsync from '../redux/actions/signupAction.js'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header.js'

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()


  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  })
  const [message, setMessage] = useState('')

  const state = useSelector((state) => state )
 

  const handleInput = (e) => {
    const { name, value } = e.target

    setSignupInfo((inputDetails) => {
      return { ...inputDetails, [name]: value }
    })
  }

  const submitLogin = (event) => {
    event.preventDefault()
    if(signupInfo.firstName === '' || signupInfo.lastName === '' 
    || signupInfo.username ===''|| signupInfo.password === ''){
      return (setMessage('Fill in all fields'))
    }
    else{
      dispatch(signupAsync(signupInfo))
    }
      if (state.signup.data !== "" ) {
        history.push('/login')
      }
  }

  return (
    <div> 
      <Header />
    
  <div className='background'>
     
     <div className='loginForm'>
       <div className='center'> 
        <h3 className='title'>Sign up</h3>
        </div>
        <form onSubmit={submitLogin}>
            <input
              name="firstName"
              value={signupInfo.firstName}
              onChange={handleInput}
              autoComplete="off"
              type="text"
              placeholder="Enter First Name"
              id="signup-firstname"
              className='formInput'
            />
  
            <input
              name="lastName"
              value={signupInfo.lastName}
              onChange={handleInput}
              autoComplete="off"
              type="text"
              placeholder="Enter Last Name"
              id="signup-lastname"
              className='formInput'
            />

            <input
              name="username"
              value={signupInfo.username}
              onChange={handleInput}
              autoComplete="off"
              type="text"
              placeholder="Enter username"
              id="signup-username"
              className='formInput'
            />

            <input
              name="password"
              value={signupInfo.password}
              onChange={handleInput}
              autoComplete="off"
              type='password'
              placeholder="Enter your password"
              id="signup-password"
              className='formInput'
            />


        <div className='center text'> 
              <p className='size'> {message}  </p>
        </div>

          <button type="submit" className='submitButton'> Sign Up </button>
        </form>

        
        <div className='center text'> 
        <span>
        <p className='size'> Already have an account? </p>
        </span>
          <Link to="/login"> <span className='size'>Login </span></Link>
       
        </div>
          
    </div>
    </div>
    </div>
  )
}

export default Signup
