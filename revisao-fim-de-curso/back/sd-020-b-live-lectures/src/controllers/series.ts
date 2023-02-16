import { NextFunction, Request, Response } from 'express';
import BadRequest from '../errors/badRequest';
import NotFound from '../errors/notFound';
import SeriesInterface from '../interfaces/series';
import { SeriesService } from '../services/series';

export async function create(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body as SeriesInterface;
  const seriesService = new SeriesService();
  try {
    if (name === undefined) {
      throw new BadRequest('Você precisa enviar o nome da série');
    }
    await seriesService.create({ name });
    res.status(201).send();
  } catch (err) {
    next(err);
  }
}

export async function find(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const seriesService = new SeriesService();
  try {
    if (id === undefined) throw new BadRequest('Você precisa enviar o id da série');

    const obj = await seriesService.find(parseInt(id, 10));

    if (!obj) throw new NotFound('Série não encontrada');

    return res.status(200).json(obj);
  } catch (err) {
    next(err);
  }
}

export async function list(_req: Request, res: Response, next: NextFunction) {
  const seriesService = new SeriesService();
  try {
    const seriesList = await seriesService.list();

    return res.json(seriesList);
  } catch (err) {
    next(err);
  }
}