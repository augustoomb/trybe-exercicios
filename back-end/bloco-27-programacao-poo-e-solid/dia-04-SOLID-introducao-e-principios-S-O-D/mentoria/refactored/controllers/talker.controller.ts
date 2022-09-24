import { RequestHandler } from 'express';
import IController from '../interfaces/generic.controller.interface';
import ITalkerService from '../interfaces/talker.service.interface';

export default class TalkerController implements IController {
  constructor(private service: ITalkerService) {}

  create: RequestHandler = async (req, res, next) => {
    try {
      const { name, age, displayOrder } = req.body;

      const newTalker = await this.service.createTalker(
        { name, age },
        displayOrder,
      );

      return res.status(201).json({
        response: `Talker with id ${newTalker.id} successfully registered`,
      });
    } catch (error) {
      next(error);
    }
  };

  get: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const talker = await this.service.getTalker(Number(id));

      return res.status(200).json({ response: talker });
    } catch (error) {
      next(error);
    }
  };

  update: RequestHandler = async (req, res, next) => {
    try {
      const { displayOrder } = req.body;
      const { id } = req.params;

      await this.service.updateTalker(Number(id), displayOrder);

      return res
        .status(200)
        .json({ response: `Talker with id ${id} successfully updated` });
    } catch (error) {
      next(error);
    }
  };

  delete: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      await this.service.deleteTalker(Number(id));

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  };
}
