import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/pricingPlans';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Plans & Pricing</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Select the ideal plan to fit your needs and financial constraints.
            We provide customized solutions for individuals and organizations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
                plan.recommended ? 'border-2 border-orange-500 relative' : 'border border-gray-200'
              }`}
            >
              {plan.recommended && (
                <div className="bg-orange-500 text-white text-xs font-semibold py-1 px-2 absolute top-4 right-4 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{plan.billing}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                
                <a 
                  href="#get-started" 
                  className={`w-full flex items-center justify-center py-2 px-4 rounded-lg border text-center transition-colors ${
                    plan.recommended 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500' 
                      : 'text-gray-700 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  Get Started
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <h4 className="font-semibold mb-4 text-sm">What's Included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-green-100 p-1 rounded-full mr-2 text-green-600">
                        <Check size={14} />
                      </span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;