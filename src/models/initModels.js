const Categories = require("./categories.models");
const Ingredients = require("./ingredients.models");
const Instructions = require("./instructions.models");
const RecipesIngredients = require("./recipes_ingredients.models");
const Recipes = require("./recipes.models");
const Types = require("./types.models");
const UserIngredients = require("./users_ingredients.models");
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
  Users.hasMany(UserIngredients);

  //? Ingredients Realtions
  Ingredients.belongsTo(Types);
  Ingredients.hasMany(RecipesIngredients);
  Ingredients.hasMany(UserIngredients);

  //? RecipesIngredients relations
  RecipesIngredients.belongsTo(Recipes);
  RecipesIngredients.hasMany(Ingredients);

  //? UsersIngredients relations
  UserIngredients.belongsTo(Users);
  UserIngredients.belongsTo(Ingredients);

  //? UsersRecipes relations
  UsersRecipes.belongsTo(Recipes);
  UsersRecipes.belongsTo(RecipesIngredients);

  //? Intructions relations
  Instructions.belongsTo(Recipes);

  //? Categories relations
  Categories.hasMany(Recipes);

  //? Types relations
  Types.hasMany(Ingredients);
};

module.exports = initModels;
