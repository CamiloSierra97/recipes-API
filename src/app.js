//? Dependencies
const express = require("express");
const cors = require("cors");
const db = require("./utils/database");

//? Files
const config = require("./config");
const initModels = require("./models/initModels");

//? Routes
const usersRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const categoriesRouter = require("./categories/categories.router");
const recipesRouter = require("./recipes/recipes.router");
const ingredientsRouter = require("./ingredients/ingredients.router");

//? Initial Configs
const app = express();

app.use(cors());
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("Database autenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

//? Petitions

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server OK!",
    users: `localhost:${config.port}/api/v1/users`,
  });
});

//? Verbs
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/recipes", recipesRouter);
app.use("/api/v1/ingredients", ingredientsRouter);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
