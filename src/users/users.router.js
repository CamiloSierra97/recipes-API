//? Dependencies
const router = require("express").Router();
const userServices = require("./users.services");
const { getUserRecipes } = require("../recipes/recipes.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const adminValidate = require("../middlewares/role.middleware");

//? Routes

//? /api/v1/users
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userServices.getAllUsers
);

router
  .route("/me")
  .get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
  .patch(
    passport.authenticate("jwt", { session: false }),
    userServices.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    userServices.deleteMyUser
  );

router
  .route("/:id")
  .get(userServices.getUserById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.patchUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.deleteUser
  );

router.get(
  "/me/my_recipes",
  passport.authenticate("jwt", { session: false }),
  getUserRecipes
);

module.exports = router;
