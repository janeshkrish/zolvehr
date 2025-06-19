import React from 'react'
import './Footer.css'
import { UserOutlined, DollarCircleOutlined, BankOutlined, LaptopOutlined } from '@ant-design/icons'
import logo from "../assets/logo.png"

export const Footer = () => {
  return (
    <div className='footer'>
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
        </div>
                <div>
                    <img src={logo} alt="" className='logo'/>
                </div>             
    </div>
  )
}
