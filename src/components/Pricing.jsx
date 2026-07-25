import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$999',
    period: 'one-time',
    description: 'Perfect for small businesses & startups needing a sleek online presence.',
    features: [
      '5-Page Responsive Website',
      'Basic SEO Setup',
      'Mobile Optimized',
      'Contact Form Integration',
      '2 Weeks Support'
    ],
    popular: false,
    ctaText: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$2,499',
    period: 'one-time',
    description: 'Ideal for growing companies that need custom design & advanced features.',
    features: [
      'Up to 10 Custom Pages',
      'Advanced SEO & Analytics',
      'Speed & Performance Optimization',
      'CMS Integration (Sanity / Strapi)',
      '1 Month Support & Revisions'
    ],
    popular: true,
    ctaText: 'Start Your Project'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$4,999',
    period: 'starting at',
    description: 'Tailored full-stack solutions for large scale platforms & web apps.',
    features: [
      'Unlimited Pages & Custom Layouts',
      'Full Stack / Custom API Integration',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Quarterly Performance Audits'
    ],
    popular: false,
    ctaText: 'Contact Us'
  }
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container container">
        <div className="section-header">
          <span className="section-subtitle">Flexible Pricing</span>
          <h2 className="section-title">Simple, Transparent Plans</h2>
          <p className="section-description">
            Choose the right plan for your business needs. No hidden fees or unexpected charges.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular-card' : ''}`}
            >
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="plan-price-wrapper">
                <span className="plan-price">{plan.price}</span>
                <span className="plan-period">/ {plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`btn plan-btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};