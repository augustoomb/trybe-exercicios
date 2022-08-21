const joi = require('joi');

const userSchema = joi.object({
  username: joi.string().min(3).max(20).required(),
  password: joi.string().min(6).max(10).required(),
});

const userValidation = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(422).json({ message: error.message });
  next();
};

const phraseSchema = joi.object({
  phrase: joi.string().min(5).max(200).required(),
  // authorId: joi.number().strict().required(),
});

const phraseValidation = (req, res, next) => {
  const { error } = phraseSchema.validate(req.body);
  if (error) return res.status(422).json({ message: error.message });
  next();
};

const validation = { userValidation, phraseValidation };
module.exports = validation;