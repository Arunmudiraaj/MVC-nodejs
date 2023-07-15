const { Sequelize } = require("sequelize");
const SequelizeData = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: SequelizeData.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: SequelizeData.STRING,
  price: {
    type: SequelizeData.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: SequelizeData.STRING,
    allowNull: false,
  },
  description: {
    type: SequelizeData.STRING,
    allowNull: false,
  },
});

module.exports = Product;
