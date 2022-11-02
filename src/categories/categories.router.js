const router = require("express").Router();
const categoriesServices = require("./categories.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const adminValidate = require("../middlewares/role.middleware");

router
  .route("/")
  .get(categoriesServices.getAllCategories)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    categoriesServices.createCategory
  );

router
  .route("/:id")
  .get(categoriesServices.getCategoryById)
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    categoriesServices.deleteCategory
  );

module.exports = router;
