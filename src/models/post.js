const { Post } = require('../..'); // Asegúrate de importar el modelo de datos de tu post

// Obtener todos los posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los posts.' });
  }
};

// Obtener un post por ID
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado.' });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el post.' });
  }
};

// Crear un nuevo post
const createPost = async (req, res) => {
  const { titulo, contenido, imagenURL } = req.body;
  try {
    const newPost = await Post.create({ titulo, contenido, imagenURL });
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el post.' });
  }
};

// Actualizar un post por ID
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, imagenURL } = req.body;
  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado.' });
    }
    post.titulo = titulo;
    post.contenido = contenido;
    post.imagenURL = imagenURL;
    await post.save();
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el post.' });
  }
};

// Eliminar un post por ID
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado.' });
    }
    await post.destroy();
    res.json({ message: 'Post eliminado con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el post.' });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
