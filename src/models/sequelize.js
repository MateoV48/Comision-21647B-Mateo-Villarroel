const Sequelize = require('sequelize');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde un archivo .env
dotenv.config();

// Crear una instancia de Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = sequelize;
