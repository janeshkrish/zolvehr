import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { TopBanner } from '../TopBanner/TopBanner'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Navbar } from '../Navbar/Navbar';

export const SignUp = () => {
    const [emailEntered,setEmailEntered] = useState(false)
    const [email,setEmail] = useState('')

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleBeginTrial = (e) =>{
        e.preventDefault()
        if (email.trim() !== ''){
            setEmailEntered(true)
        }
    }

  return (
    <div className='sigupbg'>  
        <Navbar />
      <div className='signup-container'>
        {!emailEntered ?(
            <>
        <div className="left-panel">
            <h1><span className="highlight">Not</span> just a free trial!</h1>
            <p className='left-p'>
                Try the ZolveHR ‘Enterprise’ Experience for 7 Days. No payment, no credit card, no commitment.
            </p>
            <h4>Free Account Inclusions:</h4>
            <ul>
                <li>All features from Enterprise plan</li>
                <li>Fully functional, mobile ESS</li>
                <li>Prefilled dummy data</li>
                <li>Guided product tours for admins</li>
            </ul>
        </div>
        <div className="right-panel">
            <form  onSubmit={handleBeginTrial}>
             <h2>7 Days Trial Account</h2>
             <p className='txt'>Set up takes 60 seconds</p>
             <label>Email Address <span className='asterik'>*</span></label>
             <input type="email" placeholder='myemail@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
             <button>Begin Trial</button>
            </form>
            <p className="login-link">Already have a ZolveHR account? <Link to="/login" className='loginbtn'>Login</Link></p>
        </div>
        </>
        ):(
            <div className="form-panel">
                <div className="signup-box">
                    <h2>Try ZolveHR for 7 days</h2>
                    <p>No credit card. No commitments.</p>
                    <form>
                        <label>First Name <span className='asterik'>*</span></label>
                        <input type="txt" placeholder='eg:Ram' required />
                        <label>Last Name <span className='asterik'>*</span></label>
                        <input type="txt" placeholder='eg:G' required />
                        <label>Phone Number </label>
                        <input type="number" placeholder='1234567890' />
                        <label>Login URL <span className='asterik'>*</span></label>
                        <div className="login-url-input">
                            <input type="txt" placeholder='company name' required />
                            <span>.zolvehr.com</span>
                        </div>
                        <label className='loginid'>Login ID <span className='asterik'>*</span></label>
                        <input type="email" value={email} readOnly />
                        <label>Password <span className='asterik'>*</span></label>
                        <div className="password-input-wrapper">
                            <input type={showPassword ? 'text' : 'password'} placeholder='company name' 
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
                             </span>
                        </div>
                        <button type='submit'>Get OTP</button>
                    </form>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}
