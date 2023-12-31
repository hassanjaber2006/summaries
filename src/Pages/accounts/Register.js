import React, {useState} from 'react'
import './Accounts.css'
import { Link } from 'react-router-dom'
import show_hide_password from './show_hide_password'
const Register = ()=> {
  const [passwordState, setpasswordState] = useState('show');
  return (
    <main className='accounts-main'>
        <form>
            <h2 className='accounts-title'>Register</h2>
            <div className="input-box">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Username@123' required/>
            </div>
            <div className="input-box">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='Example@gmail.com' required/>
            </div>
            <div className='input-box'>
                <label htmlFor="password">Password</label>
                <input type="text" id='password' placeholder='******' required/>
                <button type='button' className='show-hide-password' onClick={()=>{show_hide_password(passwordState,setpasswordState)}}>
                <i class="fa-solid fa-eye" id='show-hide-password'></i>
                </button>
            </div>
            <button className='accounts-button' type='button'>Register</button>
            <Link to="/accounts/login">Login</Link>
        </form>
    </main>
  )
}

export default Register