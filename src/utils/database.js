const { Sequelize } = require("sequelize");
const config = require("../config");

//? Environment variables
const db = new Sequelize({
  dialect: "production",
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.dbName,
  dialectOptions:
    process.env.NODE_ENV === "production"
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
});

module.exports = db;
