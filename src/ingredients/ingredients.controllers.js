//? Dependencies
const uuid = require("uuid");
const Ingredients = require("../models/ingredients.models");

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
  const data = await Ingredients.update(id, {
    where: {
      id,
    },
  });
  return data;
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

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  updateIngredient,
  deleteIngredient,
};
