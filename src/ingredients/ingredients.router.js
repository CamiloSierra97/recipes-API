//? Dependencies
const router = require("express").Router();
const ingredientServices = require("./ingredients.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//? /api/v1/ingredients
router
  .route("/")
  .get(ingredientServices.getAllIngredients)
  .post(
    passport.authenticate("jwt", { session: false }),
    ingredientServices.createIngredient
  );

router
  .route("/:ingredient_id")
  .get(ingredientServices.getIngredientById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    ingredientServices.patchIngredient
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    ingredientServices.deleteIngredient
  );

router.post(
  "/:ingredient_id/add_to_user",
  passport.authenticate("jwt", { session: false }),
  ingredientServices.postIngredienteToUser
);

// router.delete(
//   "/:ingredient_id/delete_ingredient",
//   passport.authenticate("jwt", { session: false }),
//   ingredientServices.deleteUsersIngredient
// );

module.exports = router;
