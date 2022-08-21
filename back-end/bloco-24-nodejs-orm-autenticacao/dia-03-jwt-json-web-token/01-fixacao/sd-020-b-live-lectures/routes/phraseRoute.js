const { Router } = require('express');

const phraseController = require('../controllers/phrases');
const validation = require('../middlewares/validations');
const authMiddleware = require('../middlewares/auth');

const phraseRouter = Router();

phraseRouter.get('/:id', phraseController.getById);
phraseRouter.get('/', phraseController.getAll);
phraseRouter.post('/', validation.phraseValidation, authMiddleware.auth, phraseController.create);

module.exports = phraseRouter;