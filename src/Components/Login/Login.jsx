import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

export const Login = () => {
  return (
    <div>
    <Navbar />
    <div className='login-container'>
            <div className="login-box">
                <form>
                 <h2 className="login-title">Login to ZolveHR</h2>
                 <p className="login-subtext">Find out the zolveHR URL for your company</p>
                 <p className="entry-text">Official Email or Phone Number</p>
                 <input type="text" placeholder='Type here...' className='input-field' required />
                <button type="submit" className="login-btn">Login</button>
                <p className="signup-link">Don't have a ZolveHR account?</p>
                <Link to='/signup' className='signup'>Sign up</Link>
                </form>
            </div>
       </div>
    </div>
  )
}
