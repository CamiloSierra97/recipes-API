//? Dependencies
const uuid = require("uuid");
const Ingredients = require("../models/ingredients.models");
const UsersIngredients = require("../models/users_ingredients.models");

//? See all Ingredients
const getAllIngredients = async () => {
  const data = await Ingredients.findAll();
  return data;
};

//? See one Ingredient
const getIngredientById = async (id) => {
  const data = await Ingredients.findOne({
    where: {
      id,
    },
  });
  return data;
};

//? Create Ingredient
const createIngredient = async (data) => {
  const newIngredient = await Ingredients.create({
    id: uuid.v4(),
    name: data.name,
    urlImg: data.urlImg,
    typeId: data.typeId,
  });
  return newIngredient;
};

//? Modify Ingredient
const updateIngredient = async (id, data) => {
  const result = await Ingredients.update(data, {
    where: {
      id,
    },
  });
  return result;
};

//? Delete Ingredient
const deleteIngredient = async (id) => {
  const data = await Ingredients.destroy({
    where: {
      id,
    },
  });
  return data;
};

const addIngredientToUser = async (data) => {
  const newIngredient = await UsersIngredients.create({
    id: uuid.v4(),
    amount: data.amount,
    userId: data.userId,
    ingredientId: data.ingredientId,
  });
  return newIngredient;
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  addIngredientToUser,
};
