import React from 'react';
import { ChefHat } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're passionate about making cooking accessible and enjoyable for everyone through the power of AI technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At ChefAI, we believe everyone deserves to enjoy delicious, home-cooked meals regardless of their cooking experience. Our AI-powered platform helps you discover and create amazing recipes with ingredients you already have.
            </p>
            <div className="flex items-center text-orange-500 mb-6">
              <ChefHat className="w-6 h-6 mr-2" />
              <span className="font-semibold">Powered by Advanced AI Technology</span>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Personalized recipe recommendations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Smart ingredient substitutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Dietary preference customization
              </li>
            </ul>
          </div>
          
          <div>
            <img 
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;