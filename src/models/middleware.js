const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware para habilitar solicitudes cruzadas (CORS)
app.use(cors());

// Middleware de seguridad (Helmet)
app.use(helmet());

// Middleware para registrar solicitudes HTTP (Morgan)
app.use(morgan('combined'));

module.exports = app;
