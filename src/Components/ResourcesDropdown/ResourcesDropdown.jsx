import React from 'react'
import './ResourcesDropdown.css'
import { AudioOutlined, VideoCameraOutlined, SafetyCertificateOutlined , ClockCircleOutlined, CalendarOutlined, FolderOpenOutlined , EditOutlined, CompassOutlined, FileTextOutlined, BarChartOutlined, RocketOutlined, DollarCircleOutlined } from '@ant-design/icons'
export const ResourcesDropdown = () => {
  return (
    <div className='resource-dropdown'>
        <div className="resourcecolumns">
            <div className="column">
                <ul>
                    <li><FolderOpenOutlined />Resource Library</li>
                    <li><EditOutlined />Blogs</li>
                    <li><CompassOutlined />Guides</li>
                    <li><FileTextOutlined />Templates</li>
                    <li><BarChartOutlined />Reports & Insights</li>
                    <li><RocketOutlined />Performance Management</li>
                    <li><DollarCircleOutlined />Payroll Management</li>
                    <li><CalendarOutlined />Leave Management</li>
                    <li><ClockCircleOutlined />Attendance management</li>
                    <li><SafetyCertificateOutlined />Statutory Compliances</li>
                </ul>
            </div>
            <div className="column">
                <ul>
                    <li><VideoCameraOutlined />Webinars</li>
                    <li><AudioOutlined />Podcasts</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
