import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: [String],
  image: String,
  cookTime: String,
  prepTime: String,
  servings: Number,
  cuisine: String,
  dietaryOptions: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Recipe', recipeSchema);