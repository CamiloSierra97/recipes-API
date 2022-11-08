const Categories = require("./categories.models");
const Ingredients = require("./ingredients.models");
const Instructions = require("./instructions.models");
const RecipesIngredients = require("./recipes_ingredients.models");
const Recipes = require("./recipes.models");
const Types = require("./types.models");
const UsersIngredients = require("./users_ingredients.models");
const UsersRecipes = require("./users_recipes.models");
const Users = require("./users.models");

const initModels = () => {
  //? Recipes relations
  Recipes.belongsTo(Users);
  Recipes.belongsTo(Categories);
  Recipes.hasMany(UsersRecipes);
  Recipes.hasMany(RecipesIngredients);
  Recipes.hasMany(Instructions);

  //? Users relations
  Users.hasMany(Recipes);
  Users.hasMany(UsersRecipes);
  Users.hasMany(UsersIngredients);

  //? Ingredients relations
  Ingredients.belongsTo(Types);
  Ingredients.hasMany(RecipesIngredients);
  Ingredients.hasMany(UsersIngredients);

  //? RecipesIngredients relations
  RecipesIngredients.belongsTo(Recipes);
  RecipesIngredients.belongsTo(Ingredients);

  //? UsersIngredients relations
  UsersIngredients.belongsTo(Users);
  UsersIngredients.belongsTo(Ingredients);

  //? UsersRecipes relations
  UsersRecipes.belongsTo(Recipes);
  UsersRecipes.belongsTo(Users);

  //? Intructions relations
  Instructions.belongsTo(Recipes);

  //? Categories relations
  Categories.hasMany(Recipes);

  //? Types relations
  Types.hasMany(Ingredients);
};

module.exports = initModels;
