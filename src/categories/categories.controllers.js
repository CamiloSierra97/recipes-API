//? Dependencies
const Categories = require("../models/categories.models");
const Recipes = require("../models/recipes.models");

//? See all categories
const getAllCategories = async () => {
  const data = await Categories.findAll({
    include: [
      {
        model: Recipes,
        attributes: {
          exclude: ["userId", "categoryId"],
        },
      },
    ],
  });
  return data;
};

//? See one category
const getCategoryById = async (id) => {
  const data = await Categories.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Recipes,
        attributes: {
          exclude: ["userId", "categoryId"],
        },
      },
    ],
  });
  return data;
};

//? Create category
const createCategory = async (name) => {
  const newCategory = await Categories.create({
    name,
  });
  return newCategory;
};

//? Delete Category
const deleteCategory = async (id) => {
  const data = await Categories.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
};
