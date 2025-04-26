import React from 'react';
import { features } from '../../data/features';
import { ChefHat, Heart, Leaf, ShoppingCart, Bookmark, Globe } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ChefHat':
      return <ChefHat className="w-6 h-6" />;
    case 'Heart':
      return <Heart className="w-6 h-6" />;
    case 'Leaf':
      return <Leaf className="w-6 h-6" />;
    case 'ShoppingCart':
      return <ShoppingCart className="w-6 h-6" />;
    case 'Bookmark':
      return <Bookmark className="w-6 h-6" />;
    case 'Globe':
      return <Globe className="w-6 h-6" />;
    default:
      return <ChefHat className="w-6 h-6" />;
  }
};

const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Features of ChefAI</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Strong features to assist you in creating dishes that are both healthy and tasty.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] border border-gray-100"
            >
              <div className="p-3 bg-orange-100 rounded-lg inline-block mb-4">
                <div className="text-orange-600">
                  {getIcon(feature.icon)}
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#get-started" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;