const tokenHelper = require('../utils/tokenHelper');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  const authorized = tokenHelper.verifyToken(token);

  if (authorized.error) { return next(authorized.error) }

  return res.status(200).json({ username: authorized.user, admin: authorized.admin });
};