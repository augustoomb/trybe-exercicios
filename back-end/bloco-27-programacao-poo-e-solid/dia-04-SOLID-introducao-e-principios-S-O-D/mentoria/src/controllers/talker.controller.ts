import { RequestHandler } from 'express';

import Services from '../services';

const createTalker: RequestHandler = async (req, res, next) => {
  try {
    const { name, age, displayOrder } = req.body;

    const newTalker = await Services.Talker.createTalker(
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

const getTalker: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talker = await Services.Talker.getTalker(Number(id));

    return res.status(200).json({ response: talker });
  } catch (error) {
    next(error);
  }
};

const updateTalker: RequestHandler = async (req, res, next) => {
  try {
    const { displayOrder } = req.body;
    const { id } = req.params;

    await Services.Talker.updateTalker(Number(id), displayOrder);

    return res
      .status(200)
      .json({ response: `Talker with id ${id} successfully updated` });
  } catch (error) {
    next(error);
  }
};

const deleteTalker: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Services.Talker.deleteTalker(Number(id));

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default { createTalker, getTalker, updateTalker, deleteTalker };
