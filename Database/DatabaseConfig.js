require('dotenv').config();
const { Sequelize } = require('sequelize');
const usermodel = require("../Models/UserModel")


const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  // query: { raw: true },
  quoteIdentifiers: false
});


module.exports = sequelize;