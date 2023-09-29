const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Reemplaza esto con la configuración correcta de Sequelize

const Post = sequelize.define('Post', {
  // Define los campos de la tabla Posts
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imagenURL: {
    type: DataTypes.STRING
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  // Define el nombre de la tabla
  tableName: 'Posts',
  // Otros ajustes si es necesario
});

module.exports = Post;
