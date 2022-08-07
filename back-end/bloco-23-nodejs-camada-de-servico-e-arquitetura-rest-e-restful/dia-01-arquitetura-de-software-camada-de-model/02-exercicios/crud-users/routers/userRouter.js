const express = require('express');
const rescue = require('../rescue');
const User = require('../models/User');
const userValidator = require('../validators/userValidator');
const { checkNullFields, passCheck, checkBlankFields, validateEmail } = userValidator;

const router = express.Router();

router.post('/', checkNullFields, passCheck, rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const createdUser = await User.createUser(firstName, lastName, email, password);
  return res.status(201).json(createdUser);
}));

router.get('/', rescue(async (_req, res) => {
  const listUsers = await User.getAllUsers();
  return res.status(200).json(listUsers);
}));

router.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);
  if (user.length === 0) {
    return res.status(404).json({ message: "User not Found" });
  }
  return res.status(200).json(user);
}));

router.put('/:id', checkNullFields, checkBlankFields, validateEmail, passCheck, rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const updatedUser = await User.updateUser(id, firstName, lastName, email, password);
  if (updatedUser.length === 0) {
    return res.status(404).json({ message: "User not Found" });
  }
  return res.status(200).json(updatedUser);
}));

module.exports = router;