import React from 'react'
import './ProductDropdown.css'
import { UserOutlined, DollarCircleOutlined, CalendarOutlined, ClockCircleOutlined, LineChartOutlined, IdcardOutlined, SmileOutlined, AppstoreOutlined, PlusOutlined, BankOutlined, LaptopOutlined } from '@ant-design/icons'

export const ProductDropdown = () => {
  return (
    <div className="product-dropdown">
            <div className="productcolumns">
                <div className="column">
                    <h4>Product</h4>
                    <ul>
                        <li><UserOutlined /> HR Software</li>
                        <li><DollarCircleOutlined /> Payroll Software</li>
                        <li><CalendarOutlined /> Leave Management</li>
                        <li><ClockCircleOutlined /> Attendance Management</li>
                        <li><LineChartOutlined /> Performance Management</li>
                        <li><IdcardOutlined /> Employee Self Service</li>
                        <li><SmileOutlined /> Employee Engagement</li>
                        <li><AppstoreOutlined />Unite Marketplace</li>
                        <li><PlusOutlined />Recruitment Software</li>
                    </ul>
                </div>
                <div className='column'>
                    <h4>For Industry</h4>
                    <ul>
                        <li><BankOutlined />Manufacturing</li>
                        <li><LaptopOutlined /> SaaS/IT</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
