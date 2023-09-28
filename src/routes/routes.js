const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/posts');

// Ruta para obtener todos los posts
router.get('/posts', getAllPosts);

// Ruta para obtener un post por ID
router.get('/posts/:id', getPostById);

// Ruta para crear un nuevo post
router.post('/posts', createPost);

// Ruta para actualizar un post por ID
router.put('/posts/:id', updatePost);

// Ruta para eliminar un post por ID
router.delete('/posts/:id', deletePost);

module.exports = router;
