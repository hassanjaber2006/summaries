import React, { useState } from 'react';
import './Accounts.css'
import show_hide_password from './show_hide_password';
import { Link } from 'react-router-dom';
const Login = ()=> {
  const [passwordState, setpasswordState] = useState('show');
  return (
    <main className='accounts-main'>
      <form>
          <h2 className='accounts-title'>Login</h2>
          <div className="input-box">
              <label htmlFor="username">Username</label>
              <input type="text" id='username' placeholder='Username@123' required/>
          </div>
          <div className='input-box'>
              <label htmlFor="password">Password</label>
              <input type="text" id='password' placeholder='******' required/>
              <button type='button' className='show-hide-password' onClick={()=>{show_hide_password(passwordState,setpasswordState)}}>
                <i class="fa-solid fa-eye" id='show-hide-password'></i>
              </button>
          </div>
          <button className='accounts-button' type='button'>Login</button>
          <Link to="/accounts/register">Register</Link>
      </form>
    </main>

  )
}

export default Login