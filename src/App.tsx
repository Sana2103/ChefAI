import React from 'react';
import { RecipeProvider } from './context/RecipeContext';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <RecipeProvider>
      <Home />
    </RecipeProvider>
  );
}

export default App;