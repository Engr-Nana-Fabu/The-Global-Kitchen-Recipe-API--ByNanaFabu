const Recipe = require("../models/Recipe");

// Get all recipes
const getAllRecipes = async (category) => {
  const filter = category ? { category } : {};

  return await Recipe.find(filter);
};

// Get recipe by ID
const getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

// Create recipe
const createRecipe = async (recipeData) => {
  if (recipeData.cookingTime <= 0) {
    throw new Error("Cooking time must be positive");
  }

  return await Recipe.create(recipeData);
};

// Update recipe
const updateRecipe = async (id, updateData) => {
  if (updateData.cookingTime && updateData.cookingTime <= 0) {
    throw new Error("Cooking time must be positive");
  }

  return await Recipe.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

// Delete recipe
const deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};