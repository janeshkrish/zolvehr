import React from 'react'
import './Footer.css'
import {
  InstagramOutlined, TwitterOutlined, FacebookOutlined, SendOutlined,
  MailOutlined, EnvironmentOutlined, CopyrightOutlined, UpCircleOutlined,
  UserOutlined, DollarCircleOutlined, BankOutlined, LaptopOutlined
} from '@ant-design/icons'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-col'>
          <h2>Newsletter Signup</h2>
          <p>Subscribe our newsletter for hints, tips and the latest product news.</p>
          <form className='subscribe-box'>
            <input type="email" placeholder="your email address..." required />
            <button><SendOutlined /> SUBSCRIBE</button>
          </form>
          <div className="social-icons">
            <a href=""><FacebookOutlined /></a>
            <a href=""><TwitterOutlined /></a>
            <a href=""><InstagramOutlined /></a>
          </div>
        </div>
        <div className='footer-col'>
          <div className='column-group'>
            <h4>Product</h4>
            <p className='details'><UserOutlined /> HR Software</p>
            <p className='details'><DollarCircleOutlined /> Payroll Software</p>
          </div>
          <div className='column-group'>
            <h4>For Industry</h4>
            <p className='details'><BankOutlined /> Manufacturing</p>
            <p className='details'><LaptopOutlined /> SaaS/IT</p>
          </div>
        </div>
        <div className='footer-col'>
          <h4>Contact</h4>
          <p className='address'><EnvironmentOutlined /> AKR Industries 2/385 G, Mummoorthy Nagar, P.N.Road, Tirupur - 641 602 Tamilnadu, India</p>
          <p className='address'><MailOutlined /> info@akrind.com</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          <img src={logo} alt="Logo" className='logo' />
        </div>
        <div className='footer-bottom-center'>
          <p><CopyrightOutlined /> 2025 <span className='head'>ZolveHR</span>. All Rights Reserved.</p>
          <div className='policy-links'>
            <Link to="/privacy" className='term'>Privacy Policy</Link>
            <Link to="/terms" className='term'>Terms of Use</Link>
          </div>
        </div>
        <div className='footer-bottom-right'>
          <a href="/" className='no-underline'><p className='back-to-top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <UpCircleOutlined />
          </p></a>
        </div>
      </div>
    </div>
  )
}
