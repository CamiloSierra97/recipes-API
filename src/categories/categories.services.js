const categoryControllers = require("./categories.controllers");

const getAllCategories = (req, res) => {
  categoryControllers
    .getAllCategories()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getCategoryById = (req, res) => {
  const id = req.paramas.id;
  categoryControllers
    .getCategoryById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createCategory = (req, res) => {
  const name = req.body;
  if (name) {
    categoryControllers
      .createCategory(name)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(404).json({
      message: "All fields must be completed",
      fields: {
        name: "stringF",
      },
    });
  }
};

const deleteCategory = (req, res) => {
  const id = req.params.id;
  categoryControllers
    .deleteCategory(id)
    .then((data) => {
      if (data != 0) {
        res.status(204).json(data);
      } else {
        res.status(404).json({ message: "invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  deleteCategory,
};
