import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import validationUser from '../middlewares/users.middleware';

const router = Router();

const usersController = new UsersController();

router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);
router.post('/users/', validationUser, usersController.create);

export default router;
