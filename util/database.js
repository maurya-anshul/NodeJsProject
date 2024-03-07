const Sequelize = require('sequelize');

const sequelize = new Sequelize('product', 'root', '9948', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;