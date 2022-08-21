const tokenHelper = require('../helpers/tokenHelper');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) return res.status(401).json({ message: 'Necessita de token' });
    const dados = tokenHelper.verifyToken(authorization);
    req.userId = dados.id;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { auth };