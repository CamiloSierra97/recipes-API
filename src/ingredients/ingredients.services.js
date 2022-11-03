const ingredientControllers = require("./ingredients.controllers");

const getAllIngredients = (req, res) => {
  ingredientControllers
    .getAllIngredients()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getIngredientById = (req, res) => {
  const id = req.params.id;
  ingredientControllers
    .getIngredientById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json("Invalid ID");
      }
    })
    .catch((err) => {
      res.status(400).json(400).json({ message: err.message });
    });
};

const createIngredient = (req, res) => {
  const { name, urlImg, typeId } = req.body;
  if (name && typeId) {
    ingredientControllers
      .createIngredient({ name, urlImg, typeId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      messgae: "Missing or invalid data",
      fields: {
        name: "string",
        urlImg: "string",
        typeId: "number",
      },
    });
  }
};

const patchIngredient = (req, res) => {
  const id = req.params.ingredient_id;
  const { name, urlImg, typeId } = req.body;
  ingredientControllers
    .updateIngredient(id, { name, urlImg, typeId })
    .then((data) => {
      res
        .status(200)
        .json({ message: `Ingredient with ID ${id} edited succesfully!` });
    });
};

const deleteIngredient = (req, res) => {
  const id = req.params.ingredient_id;
  ingredientControllers
    .deleteIngredient(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllIngredients,
  getIngredientById,
  createIngredient,
  patchIngredient,
  deleteIngredient,
};
