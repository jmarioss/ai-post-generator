const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 2222,
});

module.exports = sequelize;
