import React from 'react'
import './Footer.css'
import { InstagramOutlined, TwitterOutlined, FacebookOutlined, SendOutlined, MailOutlined, 
    EnvironmentOutlined, CopyrightOutlined, UpCircleOutlined, UserOutlined, DollarCircleOutlined, BankOutlined, LaptopOutlined } from '@ant-design/icons'
import logo from "../assets/logo.png"

export const Footer = () => {
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
      </div>
        <div className="footersection">
            <div className="columns">
                    <h4>Product</h4>
                    <ul>
                        <li><UserOutlined /> HR Software</li>
                        <li><DollarCircleOutlined /> Payroll Software</li>
                    </ul>
                </div>
                <div className='columns'>
                    <h4>For Industry</h4>
                    <ul>
                        <li><BankOutlined />Manufacturing</li>
                        <li><LaptopOutlined /> SaaS/IT</li>
                    </ul>
                </div>
                <div className='columns'>
                    <h4>Contact</h4>
                    <ul>
                        <li><EnvironmentOutlined />AKR Industries 2/385 G, Mummoorthy Nagar,P.N.Road, Tirupur - 641 602 Tamilnadu, India</li>
                        <li><MailOutlined /> info@akrind.com</li>
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
