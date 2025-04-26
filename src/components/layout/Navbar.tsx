import React from 'react';
import { ChefHat } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <ChefHat className="text-white h-6 w-6 mr-2" />
          <span className="text-white font-bold text-xl">ChefAI</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-orange-200 transition-colors">About Us</a>
          <a href="#pricing" className="text-white hover:text-orange-200 transition-colors">Pricing</a>
          <a href="#contact" className="text-white hover:text-orange-200 transition-colors">Contact Us</a>
          <a href="#blog" className="text-white hover:text-orange-200 transition-colors">Blog</a>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
            <span className="text-white font-bold">S</span>
          </div>
        </div>
        
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;