const getAllPosts = async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.render('list-posts', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los posts.' });
    }
  };
  