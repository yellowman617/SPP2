'use client';

import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular, 
  buttonText,
  buttonVariant = "primary",
  onClickHandler,
  isSelected
}: {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
  onClickHandler: () => void;
  isSelected?: boolean;
}) => (
  <div className={`pricing-card ${isPopular ? 'popular' : ''} ${isSelected ? 'selected' : ''}`}>
    {isPopular && <div className="popular-badge">Most Popular</div>}
    <h3 className="pricing-title">{title}</h3>
    <div className="pricing-price">
      <span className="currency">$</span>
      <span className="amount">{price}</span>
      <span className="period">/month</span>
    </div>
    <p className="pricing-description">{description}</p>
    <ul className="pricing-features">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <svg 
            className="check-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button 
      className={`mt-8 block w-full py-3 px-6 border rounded-md text-center font-medium ${
        buttonVariant === 'primary'
          ? 'bg-blue-600 border-transparent text-white hover:bg-blue-700'
          : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
      }`} 
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  </div>
);

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showFeatures, setShowFeatures] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const plans = [
    {
      name: 'Basic',
      price: billingPeriod === 'monthly' ? 20 : 192,
      description: 'Perfect for individuals who need basic password management.',
      features: [
        'Password generation',
        'Basic password storage',
        'Password history',
        'Basic password strength checker',
        'Browser extension',
        'Mobile app access',
        'Cloud sync',
        'Basic support',
      ],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: billingPeriod === 'monthly' ? 50 : 480,
      description: 'Ideal for professionals who need advanced password management.',
      features: [
        'Everything in Basic',
        'Advanced password generation',
        'Secure password sharing',
        'Password breach checking',
        'Two-factor authentication',
        'Encrypted password vault',
        'Password sharing with expiring links',
        'Password strength analyzer with detailed reports',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? 125 : 1200,
      description: 'Perfect for teams and small businesses.',
      features: [
        'Everything in Pro',
        'Team password sharing',
        'Role-based access control',
        'Activity logging',
        'Password rotation policies',
        'API access for integration',
        'Team management dashboard',
        'Advanced security features',
        'Dedicated support',
      ],
      cta: 'Get Started',
      highlight: false,
    }
  ];

  const handleRedirect = (planName: string) => {
    if (!isLoggedIn) {
      // Show login modal or redirect to login page
      alert('Please log in to continue');
      return;
    }

    if (planName === 'Pro') {
      window.location.href = 'https://your-pro-plan-url.com';
    } else if (planName === 'Basic') {
      window.location.href = 'https://your-basic-plan-url.com';
    } else if (planName === 'Enterprise') {
      window.location.href = 'https://your-enterprise-url.com';
    }
  };

  const handlePlanSelect = (planName: string) => {
    if (selectedPlan === planName) {
      setSelectedPlan(null);
      setShowFeatures(false);
    } else {
      setSelectedPlan(planName);
      setShowFeatures(true);
    }
  };

  const handleBillingChange = (period: 'monthly' | 'annual') => {
    if (selectedPlan) {
      // If a plan is selected, update the price and show the new pricing
      setBillingPeriod(period);
      alert(`Billing period changed to ${period}. New price will be applied.`);
    } else {
      setBillingPeriod(period);
    }
  };

  return (
    <div className="bg-gray-50 py-16" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-500">Choose the plan that's right for you</p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative bg-white rounded-lg p-0.5 flex">
            <button
              type="button"
              className={`relative py-2 px-6 border rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-blue-600 border-transparent text-white'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => handleBillingChange('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`relative py-2 px-6 border rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto transition-colors ${
                billingPeriod === 'annual'
                  ? 'bg-blue-600 border-transparent text-white'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => handleBillingChange('annual')}
            >
              Annual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                Save 27%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-sm divide-y divide-gray-200 ${
                plan.highlight
                  ? 'border-2 border-blue-500 relative'
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 px-3 py-1 text-sm font-semibold tracking-wide text-white bg-blue-500 rounded-full transform">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </span>
                </p>
                <PricingCard 
                  title={plan.name} 
                  price={plan.price} 
                  description={plan.description} 
                  features={plan.features} 
                  buttonText={plan.cta} 
                  buttonVariant={plan.highlight ? 'primary' : 'secondary'}
                  isPopular={plan.highlight}
                  isSelected={selectedPlan === plan.name}
                  onClickHandler={() => {
                    handlePlanSelect(plan.name);
                    handleRedirect(plan.name);
                  }}
                />
              </div>
              {showFeatures && selectedPlan === plan.name && (
                <div className="pt-6 pb-8 px-6">
                  <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                    What's included
                  </h4>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <FiCheck
                          className={`flex-shrink-0 h-5 w-5 ${
                            plan.highlight ? 'text-blue-500' : 'text-green-500'
                          }`}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}