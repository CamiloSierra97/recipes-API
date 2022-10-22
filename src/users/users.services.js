const userControllers = require("../users/user.controllers");

const getAllUsers = (req, res) => {
  userControllers
    .getAllUsers()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  userControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: "Invalid ID" });
    });
};

const patchUser = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, phone, gender, country } = req.body;
  userControllers
    .updateUser(id, { firstName, lastName, phone, gender, country })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID ${id}, edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const registerUser = (req, res) => {
  const { firstName, lastName, email, password, phone, birthday } = req.body;
  if (firstName && lastName && email && password && phone && birthday) {
    //? Controller execution
  } else {
    //? Error when data is missing
    res.status(400).json();
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  userControllers
    .deleteUser(id)
    .then((data) => {
      if (data !== 0) {
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
  getAllUsers,
  getUserById,
  patchUser,
  registerUser,
  deleteUser,
};
