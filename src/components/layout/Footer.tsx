import React from 'react';
import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <ChefHat className="h-6 w-6 mr-2" />
            <span className="font-bold text-xl">ChefAI</span>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#about" className="text-white hover:text-orange-200 transition-colors mb-2">About Us</a>
            <a href="#pricing" className="text-white hover:text-orange-200 transition-colors mb-2">Pricing</a>
            <a href="#contact" className="text-white hover:text-orange-200 transition-colors mb-2">Contact Us</a>
            <a href="#blog" className="text-white hover:text-orange-200 transition-colors mb-2">Blog</a>
          </div>
        </div>
        
        <hr className="border-white/20 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <div className="mb-4 md:mb-0">
            <span>© 2025 ChefAI. All rights reserved.</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookie" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;