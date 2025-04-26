import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRecipes } from '../../context/RecipeContext';

const RecipeSearch: React.FC = () => {
  const [ingredients, setIngredients] = useState('');
  const { searchRecipes, isLoading } = useRecipes();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.trim()) {
      searchRecipes(ingredients);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Find a Recipe</h2>
      <form onSubmit={handleSearch}>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter ingredients (e.g., chicken, rice, broccoli)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              disabled={isLoading}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </div>
          </div>
          <button
            type="submit"
            className={`bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg transition-colors ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                <span>Searching...</span>
              </div>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeSearch;