const express = require('express');
const app = express();
const middleware = require('./src/models/middleware'); // Reemplaza './middleware' con la ruta correcta a tu archivo de middlewares
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require('./models'); // Asegúrate de importar tu instancia de Sequelize
const postsRoutes = require('./routes/posts');

// Middlewares y configuraciones de la aplicación aquí...

// Configura las rutas de posts
app.use('/api', postsRoutes);

// Resto de la configuración y arranque del servidor aquí...

module.exports = app;


// Usar los middlewares
app.use(middleware);

// Resto de la configuración de la aplicación aquí...

// Iniciar el servidor
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
