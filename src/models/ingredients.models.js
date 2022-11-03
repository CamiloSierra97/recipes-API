const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Types = require("./types.models");

const Ingredients = db.define(
  "ingredients",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    urlImg: {
      type: DataTypes.TEXT,
      validate: {
        // isUrl: true,
      },
      field: "url_img",
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "type_id",
      references: {
        key: "id",
        model: Types,
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Ingredients;
