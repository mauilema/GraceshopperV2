const Sequelize = require("sequelize");
const db = require("../db");

module.exports = db.define("order", {
  fulfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});
