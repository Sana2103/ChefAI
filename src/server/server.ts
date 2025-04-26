import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import Recipe from './models/Recipe';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chefai');

app.post('/api/recipes/generate', async (req, res) => {
  try {
    const { ingredients } = req.body;

    const prompt = `Create a detailed recipe using these ingredients: ${ingredients}. 
    Include title, ingredients list, step-by-step instructions, cooking time, and servings. 
    Format as JSON with the following structure:
    {
      "title": "",
      "ingredients": [],
      "instructions": [],
      "cookTime": "",
      "prepTime": "",
      "servings": 0,
      "cuisine": ""
    }`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" }
    });

    const recipeData = JSON.parse(completion.choices[0].message.content);
    
    // Add a default image based on the recipe title
    recipeData.image = `https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg`;

    const recipe = new Recipe(recipeData);
    await recipe.save();

    res.json(recipe);
  } catch (error) {
    console.error('Error generating recipe:', error);
    res.status(500).json({ error: 'Failed to generate recipe' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});