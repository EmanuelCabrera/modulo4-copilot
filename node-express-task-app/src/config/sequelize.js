const { Sequelize } = require('sequelize');

// Usar SQLite en memoria (forma recomendada)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
});

module.exports = sequelize;
