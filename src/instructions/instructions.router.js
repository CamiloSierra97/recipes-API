//? Dependencies
const router = require("express").Router();
const instructionServices = require("./instructions.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);

//? /api/v1/instructions
router
  .route("/")
  .get(instructionServices.getAllInstructions)
  .post(
    passport.authenticate("jwt", { session: false }),
    instructionServices.createInstruction
  );

router
  .route("/:instruction_id")
  .get(instructionServices.getInstructionById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    instructionServices.patchInstruction
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    instructionServices.deleteInstruction
  );

module.exports = router;
