import React from 'react'
import { TeamOutlined, WalletOutlined } from '@ant-design/icons'
import './PartnerDropdown.css'

export const PartnerDropdown = () => {
  return (
    <div className='partner-dropdown'>
        <div className="partnercolumns">
            <div className="column">
                <ul>
                    <li><TeamOutlined />Partner with us</li>
                    <li><WalletOutlined />Payroll Service Providers</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
