import React from 'react'

export const PricingHeader = ({ plans }) => {
  return (
    <div className="header-row sticky-header">
      <div className="feature-col">Modules and Features</div>
      {plans.map((plan, index) => (
        <div className="plan-col" key={index}>
          <h3>{plan.name}</h3>
          <p className="price">
            {plan.price} <span>{plan.perMonth}</span>
          </p>
          <p className="includes">{plan.includes}</p>
          <button className="plan-btn">Start Free Trial</button>
        </div>
      ))}
    </div>
  )
}
