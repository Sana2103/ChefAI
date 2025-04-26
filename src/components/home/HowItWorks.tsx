import React from 'react';
import { Search, Clock, Settings, Utensils } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Generate delicious recipes in just a few simple steps!</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-6">
              <div className="bg-orange-100 inline-block p-3 rounded-lg mb-2">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <input 
                    type="text" 
                    placeholder="Enter your ingredients..."
                    className="w-full text-sm border-0 focus:outline-none"
                    readOnly
                  />
                </div>
                <button className="w-full mt-2 bg-orange-500 text-white text-sm py-2 rounded-lg">
                  Generate
                </button>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <span className="bg-orange-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center mr-2 text-sm">1</span>
              Enter Your Ingredients
            </h3>
            <p className="text-gray-600 text-sm">
              Start by typing in the ingredients you have in your kitchen or select from our suggestions! Just add whatever you've got, and our AI will create something amazing.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-6">
              <div className="bg-blue-100 inline-block p-3 rounded-lg">
                <div className="bg-gray-700 p-4 rounded-lg shadow-sm text-white text-center">
                  <div className="flex items-center justify-center">
                    <span>We are creating</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span>your recipe</span>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <span className="bg-orange-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center mr-2 text-sm">2</span>
              AI Processing
            </h3>
            <p className="text-gray-600 text-sm">
              Using AI, we're whipping up your personalized recipe based on the ingredients you shared. In just a moment, you'll have a delicious idea ready to cook!
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-6">
              <div className="bg-green-100 p-3 rounded-lg inline-block">
                <div className="relative">
                  <div className="bg-white p-3 rounded-lg shadow-sm mb-2">
                    <input 
                      type="text" 
                      placeholder="Enter your ingredients..."
                      className="w-full text-xs border-0 focus:outline-none"
                      readOnly
                    />
                  </div>
                  <div className="absolute top-0 right-0">
                    <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">Customize Prompt</span>
                  </div>
                  <div className="mt-2">
                    <img 
                      src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Food" 
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <span className="bg-orange-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center mr-2 text-sm">3</span>
              Customize Your Recipe
            </h3>
            <p className="text-gray-600 text-sm">
              Choose your dietary preferences, cuisine styles, or specific ingredients to avoid. Whether you're vegan, paleo, gluten-free, or simply picky about certain foods, our AI adapts to your needs.
            </p>
          </div>
          
          {/* Step 4 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="mb-6">
              <div className="bg-purple-100 p-3 rounded-lg inline-block">
                <div className="relative">
                  <div className="bg-orange-500 text-white text-center p-2 rounded-lg text-xs mb-2">
                    Re-Generate
                  </div>
                  <div className="mt-2">
                    <img 
                      src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Food" 
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <span className="bg-orange-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center mr-2 text-sm">4</span>
              Cook, Save, or Share
            </h3>
            <p className="text-gray-600 text-sm">
              Get cooking with your AI-generated recipe, or save it to your favorites for later. You can also share your recipe with friends and family at the click of a button!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;