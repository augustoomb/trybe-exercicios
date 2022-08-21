const { Router } = require('express');

const userController = require('../controllers/user');
const validation = require('../middlewares/validations');

const userRouter = Router();

userRouter.get('/find-by-id/:id', userController.getById);
userRouter.get('/find-by-username/:username', userController.getByUsername);
userRouter.post('/', validation.userValidation, userController.create);
userRouter.post('/login', userController.login);

module.exports = userRouter;