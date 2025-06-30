import React from 'react'
import './CSS/Pricing.css'
import { Navbar } from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { PricingHeader } from '../Components/Pricing/PricingHeader';
import { PricingRow } from '../Components/Pricing/PricingRow';
import plans from "../Components/Pricing/plansData"

const features = [
  "Number of Employees",
  "Cost Per Additional Employee",
  "Core HR",
  "Payroll",
  "Leave Management",
  "Employee Workflows for Process Automation",
  "Attendance Management",
  "Employee Self Onboarding",
  "Comprehensive Employee Exit Management",
  "Employee Portal (Web and Mobile app)",
  "Automated Checklists for Task Management",

];

export const Pricing = () => {
  return (
    <div className='pricing'>
      <Navbar />
      <section className="customer-hero">
        <div className="overlay"> 
          <h1 className="hero-title">Pricing</h1>
          <p className="hero-breadcrumb"><Link to="/" className='homebtn1'>Home</Link> &nbsp; &gt; &nbsp; Pricing</p>
        </div>
        <div className="hero-curve" />
      </section>
          <section className="pricing-banner">
            <div className="decorative-shape shape-circle"></div>
            <div className="decorative-shape shape-half"></div>
            <div className="decorative-shape shape-quarter"></div>
          <div className="pricing-text">
            <h1>Take our <span className='highlight'>Pricing Challenge!</span></h1>
            <p>
              30000+ companies endorse ZolvetHR for exceptional software, support and service. Starting at INR 35/employee - the lowest license costs in its category
            </p>
            <div className="btn-container">
                <button className="pricing-btn">Discuss Pricing</button>
            </div>
          </div>
    </section>
    <hr className='lin'/>
    <div className="pricing-table">
      <PricingHeader plans={plans} />
      {features.map((feature, idx) => (
        <PricingRow key={idx} feature={feature} plans={plans} />
      ))}
    </div>
    </div>
  )
}
