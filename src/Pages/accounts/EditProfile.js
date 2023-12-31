import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import show_hide_password from './show_hide_password';
import image from './../../assets/default.png'
import './Accounts.css'
const EditProfile = () => {
  const [passwordState, setpasswordState] = useState('show');
  return (
    <main className='accounts-main'>
        <form>
            <div className="input-box">
                <img className="profile_picture" src={image} alt="" />
            </div>
            <h2 className='accounts-title'>Profile</h2>
            <div className="input-box">
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Username@123' required/>
            </div>
            <div className="input-box">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='Example@gmail.com' required/>
            </div>
            <div className="input-box">
                <label htmlFor="profile_picture">Profile Picture</label>
                <input type="file" id='profile_picture'/>
            </div>
            <div className="input-box">
                <label htmlFor="accountStatus">Account Status</label>
                <select>
                    <option selected value="Public">Public</option>
                    <option value="Private">Private</option>       
                </select>
            </div>
            <div className='input-box'>
                <label htmlFor="password">Password</label>
                <input type="text" id='password' placeholder='******' />
                <button type='button' className='show-hide-password' onClick={()=>{show_hide_password(passwordState,setpasswordState)}}>
                <i class="fa-solid fa-eye" id='show-hide-password'></i>
                </button>
            </div>
            <button className='accounts-button' type='button'>Save Changes</button>
        </form>
    </main>
  )
}

export default EditProfile