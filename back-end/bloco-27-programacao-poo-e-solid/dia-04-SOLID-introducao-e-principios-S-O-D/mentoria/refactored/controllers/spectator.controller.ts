import { RequestHandler } from 'express';
import IController from '../interfaces/generic.controller.interface';
import ISpectatorService from '../interfaces/spectator.service.interface';

export default class SpectatorController implements IController {
  constructor(private service: ISpectatorService) {}

  create: RequestHandler = async (req, res, next) => {
    try {
      const { name, age, position } = req.body;

      const newSpectator = await this.service.createSpectator(
        { name, age },
        position,
      );

      res.status(201).json({
        response: `Spectator with id ${newSpectator.id} successfully registered`,
      });
    } catch (error) {
      next(error);
    }
  };

  get: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const spectator = await this.service.getSpectator(Number(id));

      return res.status(200).json({ response: spectator });
    } catch (error) {
      next(error);
    }
  };

  update: RequestHandler = async (req, res, next) => {
    try {
      const { position } = req.body;
      const { id } = req.params;

      await this.service.updateSpectator(Number(id), position);

      return res
        .status(200)
        .json({ response: `Spectator with id ${id} successfully updated` });
    } catch (error) {
      next(error);
    }
  };

  delete: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      await this.service.deleteSpectator(Number(id));

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
}
