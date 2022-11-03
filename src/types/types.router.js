//? Dependencies
const router = require("express").Router();
const typeServices = require("./types.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const adminValidate = require("../middlewares/role.middleware");

//? /api/v1/types
router
  .route("/")
  .get(typeServices.getAllTypes)
  .post(
    passport.authenticate("jwt", { session: false }),
    typeServices.createType
  );

router
  .route("/:type_id")
  .get(typeServices.getTypeById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    typeServices.patchType
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    typeServices.deleteType
  );

module.exports = router;
