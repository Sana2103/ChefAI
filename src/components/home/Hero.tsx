import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRecipes } from '../../context/RecipeContext';
import { examplePrompts } from '../../data/examplePrompts';

const Hero: React.FC = () => {
  const [ingredients, setIngredients] = useState('');
  const { searchRecipes } = useRecipes();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.trim()) {
      searchRecipes(ingredients);
    }
  };

  const handleExampleClick = (prompt: string) => {
    setIngredients(prompt);
    searchRecipes(prompt);
  };

  return (
    <div className="bg-orange-500 text-white py-16 md:py-24 px-4 rounded-b-3xl relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Create Delicious Recipes in Seconds!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Enter your ingredients, choose your preferences, and let our AI create the perfect recipe for you.
          </p>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="Enter your recipes name/ingredients..."
                  className="px-4 py-3 w-full rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search size={20} />
                </div>
              </div>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Generate
              </button>
            </div>
          </form>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example Prompts</h3>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((prompt) => (
                <button
                  key={prompt.id}
                  onClick={() => handleExampleClick(prompt.text)}
                  className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-colors duration-300"
                >
                  {prompt.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <img 
            src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Food" 
            className="w-full max-w-lg rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;