import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RecipeSearch from '../components/recipe/RecipeSearch';
import RecipeCard from '../components/recipe/RecipeCard';
import RecipeDetail from '../components/recipe/RecipeDetail';
import { useRecipes } from '../context/RecipeContext';

const RecipeResult: React.FC = () => {
  const { recipes, searchQuery, isLoading, currentRecipe, setCurrentRecipe } = useRecipes();
  const [showRecipeDetail, setShowRecipeDetail] = useState(false);

  const handleRecipeClick = (recipe: any) => {
    setCurrentRecipe(recipe);
    setShowRecipeDetail(true);
  };

  const handleCloseDetail = () => {
    setShowRecipeDetail(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-purple-900 to-orange-600">
        <Navbar />
      </div>
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <RecipeSearch />
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
            <p className="text-gray-500">Finding delicious recipes for you...</p>
          </div>
        ) : (
          <>
            {searchQuery && (
              <div className="mb-6">
                <h2 className="text-2xl font-bold">
                  Results for: <span className="text-orange-500">"{searchQuery}"</span>
                </h2>
                <p className="text-gray-500">Found {recipes.length} recipes</p>
              </div>
            )}
            
            {recipes.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => handleRecipeClick(recipe)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No recipes found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Try searching for different ingredients or check the example prompts for inspiration.
                </p>
              </div>
            )}
          </>
        )}
      </div>
      
      <Footer />
      
      {showRecipeDetail && currentRecipe && (
        <RecipeDetail recipe={currentRecipe} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default RecipeResult;