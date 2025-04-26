import React from 'react';
import { Clock, Users, ChefHat, Bookmark, Share2, Copy, X } from 'lucide-react';
import { Recipe } from '../../types';

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-700" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-3">{recipe.title}</h2>
          
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-6">
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>Prep: {recipe.prepTime}</span>
            </div>
            <div className="flex items-center">
              <ChefHat size={16} className="mr-2" />
              <span>Cook: {recipe.cookTime}</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-2" />
              <span>Serves: {recipe.servings}</span>
            </div>
            <div className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
              {recipe.cuisine}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center text-gray-800">
                <span className="bg-orange-100 p-1 rounded-full mr-2 text-orange-600">
                  <ChefHat className="h-5 w-5" />
                </span>
                Ingredients
              </h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-orange-100 p-1 rounded-full mr-3 text-orange-600">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center text-gray-800">
                <span className="bg-orange-100 p-1 rounded-full mr-2 text-orange-600">
                  <Clock className="h-5 w-5" />
                </span>
                Instructions
              </h3>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between">
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors">
              <Bookmark size={18} className="mr-2" />
              <span className="text-sm font-medium">Save</span>
            </button>
            <button className="flex items-center px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
              <Share2 size={18} className="mr-2" />
              <span className="text-sm font-medium">Share</span>
            </button>
            <button className="flex items-center px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
              <Copy size={18} className="mr-2" />
              <span className="text-sm font-medium">Copy</span>
            </button>
          </div>
          <button 
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;