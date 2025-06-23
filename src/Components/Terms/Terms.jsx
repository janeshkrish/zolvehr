import React from 'react'
import './Terms.css'

export const Terms = () => {
  return (
    <div className='terms-container'>
            <div className="terms-content">
                <h1>Terms and Conditions</h1>
                <p className="effective-date">
                    <strong>Effective Date:</strong> March 1st, 2025
                </p>
                <p>
                    Welcome to ZolveHR's Human Resource Management System (HRMS). By accessing or using the system, you agree to comply with these terms.
                </p>
                <h2>Definitions</h2>
                <ul>
                    <li><strong>Company:</strong> ZolveHR Private Limited</li>
                    <li><strong>HRMS:</strong> The Human Resource Management System.</li>
                    <li><strong>User:</strong> Employees, HR personnel, and administrators.</li>
                    <li><strong>Data:</strong> Employee records, attendance, payroll, etc.</li>
                </ul>
                <h2>User Responsibilities:</h2>
                <ul>
                    <li>Provide accurate and up-to-date information.</li>
                    <li>Maintain confidentiality of login credentials.</li>
                    <li>Unauthorized access or misuse is strictly prohibited.</li>
                    <li>Comply with company policies.</li>
                </ul>
                <h2>Data Privacy and Security:</h2>
                <ul>
                    <li>Compliance with data protection laws.</li>
                    <li>Employee data used only for HR purposes.</li>
                    <li>Security measures in place but no guarantee against cyber threats.</li>
                </ul>
                <h2>System Access and Availability:</h2>
                <ul>
                    <li>Company may update, modify, or discontinue HRMS.</li>
                    <li>Downtime due to maintenance will be communicated.</li>
                    <li>Company is not liable for loss due to system unavailability.</li>
                </ul>
                <h2>Prohibited Activities:</h2>
                <ul>
                    <li>No unauthorized or unlawful activities.</li>
                    <li>No sharing of confidential HR data.</li>
                    <li>No access to restricted system areas.</li>
                </ul>
                <h2>Termination of Access:</h2>
                <ul>
                    <li>Company can revoke access for policy violations.</li>
                    <li>Terminated users must delete company-related data.</li>
                </ul>
                <h2>Limitation of Liability:</h2>
                <ul>
                    <li>Company not liable for damages from HRMS use.</li>
                    <li>Users must ensure data accuracy and compliance.</li>
                </ul>
                <h2>Modifications to Terms:</h2>
                <ul>
                    <li>Company can update Terms and Conditions anytime.</li>
                    <li>Continued use means acceptance of revised terms.</li>
                </ul>
                <h2>Governing Law:</h2>
                <ul>
                    <li>Governed by the laws of India/Tamil Nadu.</li>
                    <li>Disputes resolved per these laws.</li>
                </ul>
                <p className="contact-note">
                    For any questions, contact <a href="mailto:info@akrind.com">info@akrind.com</a>
                </p>
                <p className="acknowledgement">
                    By using the HRMS, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                </p>
            </div>
    </div>
  )
}
