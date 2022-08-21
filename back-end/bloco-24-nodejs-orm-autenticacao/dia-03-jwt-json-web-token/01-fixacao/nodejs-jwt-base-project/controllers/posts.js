const { Post } = require('../models');

module.exports = async (req, res) => {
  // aqui eu conseguiria receber o usuário logado atraves do req, que veio lá do validateJWT
  console.log(req.user.dataValues);
  const posts = await Post.findAll({ attributes: { exclude: 'id' } });
  res.status(200).json({ mockPosts: posts });
};
