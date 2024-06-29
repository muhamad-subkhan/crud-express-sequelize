const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: process.env.dialect_value,
  host: process.env.host_value,
  username: process.env.username_value,
  password: process.env.password_value,
  database: process.env.database_value,
  dialectOptions: {
    options: {
      encrypt: true,
    }
  }
});
module.exports = sequelize;