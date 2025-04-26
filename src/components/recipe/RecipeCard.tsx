import React from 'react';
import { Clock, Users, Book, ChefHat, Heart } from 'lucide-react';
import { Recipe } from '../../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer hover:translate-y-[-5px]"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-orange-50 transition-colors">
            <Heart size={18} className="text-orange-500" />
          </button>
        </div>
        {recipe.dietaryOptions && recipe.dietaryOptions.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-1">
            {recipe.dietaryOptions.map((option, index) => (
              <span key={index} className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {option}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{recipe.title}</h3>
        
        <div className="flex flex-wrap gap-3 text-gray-500 text-sm mb-3">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{recipe.prepTime} prep</span>
          </div>
          <div className="flex items-center">
            <ChefHat size={14} className="mr-1" />
            <span>{recipe.cookTime} cook</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">{recipe.cuisine}</span>
          <button className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center transition-colors">
            View Recipe
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;