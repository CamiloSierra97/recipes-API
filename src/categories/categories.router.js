const router = require("express").Router();
const userServices = require("./users.services");

//? Protect routes
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);