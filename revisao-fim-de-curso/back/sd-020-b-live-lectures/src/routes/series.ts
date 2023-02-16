import { Router } from 'express';
import { create, find, list } from '../controllers/series';

const seriesRouter = Router();


seriesRouter.get('/', list);
seriesRouter.get('/:id', find);
seriesRouter.post('/', create);


export default seriesRouter;