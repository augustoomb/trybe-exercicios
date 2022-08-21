const bcrypt = require('bcryptjs'); // npm i bcryptjs
const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    // criando um hash para não salvar a senha "crua" diretamente no banco
    const salt = bcrypt.genSaltSync(10); // aqui é + - como dizer qual nível de seg eu quero. Posso usar exatamente assim
    const passwordHash = bcrypt.hashSync(password, salt);

    const user = await User.create({ username, password: passwordHash });

    if (!user) throw Error;

    res.status(201).json({ message: 'Novo usuário criado com sucesso', user: username });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};
