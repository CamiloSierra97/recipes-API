//? Dependencies
const uuid = require("uuid");
const Recipes = require("../models/recipes.models");

//? See all Recipes
const getAllRecipes = async () => {
  const data = await Recipes.findAll();
  return data;
};

//? See one Recipe
const getRecipeById = async (id) => {
  const data = await Recipes.findOne({
    where: {
      id,
    },
  });
  return data;
};

//? Create Recipe
const createRecipe = async (data) => {
  const newRecipe = await Recipes.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    urlImg: data.urlImg,
    time: data.time,
    portions: data.portions,
    origin: data.origin,
    likes: data.likes,
    userId: data.userId,
    categoryId: data.categoryId,
  });
  return newRecipe;
};

//? Modify Recipe
const updateRecipe = async (id, data) => {
  const result = await Recipes.update(data, {
    where: {
      id,
    },
  });
  return result;
};

//? Delete Recipe
const deleteRecipe = async (id) => {
  const data = await Recipes.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
