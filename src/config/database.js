const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_de_la_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
