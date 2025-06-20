import React from 'react'
import './CompanyDropdown.css'
import { BankOutlined, FileTextOutlined, GlobalOutlined, PhoneOutlined, ReadOutlined, SolutionOutlined } from '@ant-design/icons'

export const ComapanyDropdown = () => {
  return (
    <div className='company-dropdown'>
        <div className="companycolumns">
            <div className="columns">
                <ul>
                    <li><BankOutlined />About Us</li>
                    <li><ReadOutlined />Academy</li>
                    <li><GlobalOutlined />Community</li>
                    <li><FileTextOutlined />Newsrooms</li>
                    <li><SolutionOutlined />Careers</li>
                    <li><PhoneOutlined />Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
