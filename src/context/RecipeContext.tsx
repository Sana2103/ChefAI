import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { Recipe } from '../types';

interface RecipeContextProps {
  recipes: Recipe[];
  searchQuery: string;
  isLoading: boolean;
  setSearchQuery: (query: string) => void;
  searchRecipes: (ingredients: string) => void;
  currentRecipe: Recipe | null;
  setCurrentRecipe: (recipe: Recipe | null) => void;
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);

  const searchRecipes = async (ingredients: string) => {
    try {
      setIsLoading(true);
      setSearchQuery(ingredients);
      
      const response = await axios.post('http://localhost:5000/api/recipes/generate', {
        ingredients
      });
      
      setRecipes([response.data]);
      setCurrentRecipe(response.data);
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        searchQuery,
        isLoading,
        setSearchQuery,
        searchRecipes,
        currentRecipe,
        setCurrentRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};