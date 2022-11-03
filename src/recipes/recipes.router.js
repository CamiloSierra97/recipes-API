const router = require("express").Router();
const recipeServices = require("./recipes.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const adminValidate = require("../middlewares/role.middleware");

//? /api/v1/recipes
router
  .route("/")
  .get(recipeServices.getAllRecipes)
  .post(
    passport.authenticate("jwt", { session: false }),
    recipeServices.createRecipe
  );

router
  .route("/:id")
  .get(recipeServices.getRecipeById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    recipeServices.patchRecipe
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    recipeServices.deleteRecipe
  );

module.exports = router;
