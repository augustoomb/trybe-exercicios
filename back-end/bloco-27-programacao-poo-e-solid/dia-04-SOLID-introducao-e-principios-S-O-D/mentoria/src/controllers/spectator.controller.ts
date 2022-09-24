import { RequestHandler } from 'express';

import Services from '../services';

const createSpectator: RequestHandler = async (req, res, next) => {
  try {
    const { name, age, position } = req.body;

    const newSpectator = await Services.Spectator.createSpectator(
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

const getSpectator: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const spectator = await Services.Spectator.getSpectator(Number(id));

    return res.status(200).json({ response: spectator });
  } catch (error) {
    next(error);
  }
};

const updateSpectator: RequestHandler = async (req, res, next) => {
  try {
    const { position } = req.body;
    const { id } = req.params;

    await Services.Spectator.updateSpectator(Number(id), position);

    return res
      .status(200)
      .json({ response: `Spectator with id ${id} successfully updated` });
  } catch (error) {
    next(error);
  }
};

const deleteSpectator: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Services.Spectator.deleteSpectator(Number(id));

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  createSpectator,
  getSpectator,
  updateSpectator,
  deleteSpectator,
};
