import React from 'react'

export const PricingRow = ({ feature, plans }) => {
  const key = feature
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z]/g, "");
  return (
    <div className="feature-row">
      <div className="feature-col">{feature}</div>
      {plans.map((plan, index) => (
        <div className="plan-col" key={index}>
          <p>{plan[key]}</p>
        </div>
      ))}
    </div>
  )
}
