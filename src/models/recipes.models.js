const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Categories = require("./categories.models");

const Recipes = db.define("recipes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 10,
    },
  },
  urlImg: {
    type: DataTypes.TEXT,
    validate: {
      // isUrl: true,
    },
    field: "url_img",
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  origin: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
      key: "id",
      model: Categories,
    },
  },
});

module.exports = Recipes;
