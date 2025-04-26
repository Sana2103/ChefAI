import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Free Plan',
    price: 0,
    billing: 'per user',
    description: 'Ideal for those who just starting with recipe meal basic features to explore.',
    features: [
      'Basic AI recipes',
      'Limited requests per month',
      'Standard results',
      'Access to free community resources',
      'Customizable AI model'
    ],
  },
  {
    id: 2,
    name: 'Professional',
    price: 35.50,
    billing: 'per user / month',
    description: 'Perfect for those who need advanced AI suggestions for more demanding projects.',
    features: [
      'Advanced AI recipes',
      'Up to 100 requests per month',
      'Save recipes',
      'Access to premium resources',
      'Customizable AI model'
    ],
    recommended: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 110.20,
    billing: 'per user / month',
    description: 'Best for organizations requiring top-tier AI performance and extensive usage.',
    features: [
      'Premium AI recipes',
      'Up to 500 requests per month',
      'Group editing',
      'Access to elite community resources',
      'Customizable AI model'
    ],
  },
];