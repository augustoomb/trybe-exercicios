const loginServices = require('../services/login');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const tokenLogin = await loginServices.login(username, password);

  if (tokenLogin.error) { return next(tokenLogin.error) }

  return res.status(201).json({ token: tokenLogin });
};
