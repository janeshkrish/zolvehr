import React from 'react'
import './Footer.css'
import { InstagramOutlined, TwitterOutlined, FacebookOutlined, SendOutlined, MailOutlined, 
    EnvironmentOutlined, CopyrightOutlined, UpCircleOutlined, UserOutlined, DollarCircleOutlined, BankOutlined, LaptopOutlined } from '@ant-design/icons'
import logo from "../assets/logo.png"
import { Link, useLocation } from 'react-router-dom'

export const Footer = () => {
    const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      sessionStorage.setItem('scrollY', window.scrollY);
      sessionStorage.setItem('restoreScroll', 'true');
    }
  };
  return (
    <div className='footer'>
        <div className='newsletter'>
            <h2>Newsletter Signup</h2>
            <p>Subscribe our newsletter for hints, tips and the latest product news.</p>
        <form>
            <div className='subscribe-box'>
                <input type="email" placeholder="your email address..."  required/>
                <button><SendOutlined /> SUBSCRIBE</button>
            </div>
        </form>
        <div className="social-icons">
          <span>Stay Connect</span>
          <FacebookOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
        </div>
        <div className="policy-links">
         <a href="/privacy-policy">Privacy Policy</a>
         <Link to='/terms' className='term' onClick={handleClick}>Terms of Use</Link>
        </div>
      </div>
        <div className="footersection">
            <div className="columns">
                    <h4>Product</h4>
                    <ul>
                        <li className='details'><UserOutlined /> HR Software</li>
                        <li className='details'><DollarCircleOutlined /> Payroll Software</li>
                    </ul>
                </div>
                <div className='columns'>
                    <h4>For Industry</h4>
                    <ul>
                        <li className='details'><BankOutlined />Manufacturing</li>
                        <li className='details'><LaptopOutlined /> SaaS/IT</li>
                    </ul>
                </div>
                <div className='columns'>
                    <h4>Contact</h4>
                    <ul>
                        <li className='details'><EnvironmentOutlined />AKR Industries 2/385 G, Mummoorthy Nagar,P.N.Road, Tirupur - 641 602 Tamilnadu, India</li>
                        <li className='details'><MailOutlined /> info@akrind.com</li>
                    </ul>
                </div>
        </div>
                <div className='footer-bottom'>
                    <div className="footer-bottom-left">
                        <img src={logo} alt="" className='logo'/>
                    </div>
                    <div className="footer-bottom-center">
                        <p><CopyrightOutlined /> 2025 <span className='head'>ZolveHR</span>.All Rights Reserved.</p>
                    </div>
                    <div className="footer-bottom-right">
                        <a href="/" className='no-underline'><p className='back-to-top'>BACK TO TOP <UpCircleOutlined /></p></a>
                    </div>
                </div>             
    </div>
  )
}
