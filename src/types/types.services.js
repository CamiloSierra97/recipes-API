const typesControllers = require("./types.controllers");

const getAllTypes = (req, res) => {
  typesControllers
    .getAllTypes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getTypeById = (req, res) => {
  const id = req.params.type_id;
  typesControllers
    .getTypeById(id)
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

const createType = (req, res) => {
  const { name } = req.body;
  if (name) {
    typesControllers
      .createType(name)
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
      },
    });
  }
};

const patchType = (req, res) => {
  const id = req.params.type_id;
  const { name } = req.body;
  typesControllers
    .updateType(id, name)
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `Ingstruction with ID ${id} edited succesfully!` });
      } else {
        res.status(404).json({ message: "Invaled ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteType = (req, res) => {
  const id = req.params.type_id
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
  getAllTypes,
  getTypeById,
  createType,
  patchType,
  deleteType,
};
