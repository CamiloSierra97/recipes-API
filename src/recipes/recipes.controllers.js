//? Dependencies
const uuid = require("uuid");
const { Op } = require("sequelize");
const Recipes = require("../models/recipes.models");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");
const Instructions = require("../models/instructions.models");
const RecipesIngredients = require("../models/recipes_ingredients.models");
const Ingredients = require("../models/ingredients.models");
const Types = require("../models/types.models");
const UsersRecipes = require("../models/users_recipes.models");
const UsersIngredients = require("../models/users_ingredients.models");

//? See all Recipes
const getAllRecipes = async () => {
  const data = await Recipes.findAll({
    attributes: {
      exclude: ["userId", "categoryId"],
    },
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Instructions,
        attributes: ["step", "description"],
      },
      {
        model: RecipesIngredients,
        attributes: {
          exclude: ["recipeId", "ingredientId"],
        },
        include: {
          model: Ingredients,
          attributes: {
            exclude: ["typeId"],
          },
          include: {
            model: Types,
          },
        },
      },
      {
        model: UsersRecipes,
      },
    ],
  });
  return data;
};

//? See one Recipe
const getRecipeById = async (id) => {
  const data = await Recipes.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["userId", "categoryId"],
    },
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: Instructions,
        attributes: ["step", "description"],
      },
      {
        model: RecipesIngredients,
        attributes: {
          exclude: ["recipeId", "ingredientId"],
        },
        include: {
          model: Ingredients,
          attributes: {
            exclude: ["typeId"],
          },
          include: {
            model: Types,
          },
        },
      },
      {
        model: UsersRecipes,
      },
    ],
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

//? See User's Recipes
const getUserRecipes = async (userId) => {
  const userIngredients = await UsersIngredients.findAll({
    attributes: ["ingredientId"],
    where: {
      userId,
    },
  });
  const ingredientsFilter = userIngredients.map(
    (userIngredient) => userIngredient.ingredientId
  );
  const recipeIngredients = await RecipesIngredients.findAll({
    where: {
      ingredientId: {
        [Op.in]: ingredientsFilter,
      },
    },
  });
  const recipeFilter = recipeIngredients.map(
    (recipeIngredient) => recipeIngredient.recipeId
  );
  const data = await Recipes.findAll({
    where: {
      id: {
        [Op.in]: recipeFilter,
      },
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
  getUserRecipes,
};
