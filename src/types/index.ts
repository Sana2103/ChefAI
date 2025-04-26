export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  cookTime: string;
  prepTime: string;
  servings: number;
  cuisine: string;
  dietaryOptions?: string[];
}

export interface ExamplePrompt {
  id: number;
  text: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  billing: string;
  description: string;
  features: string[];
  recommended?: boolean;
}