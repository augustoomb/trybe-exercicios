import Repositories from '../models';
import { ValidationError } from '.';
import { ISpectator } from '../interfaces';

const validateIfSpectatorExists = async (id: number): Promise<ISpectator> => {
  const spectator = await Repositories.Spectator.findById(id);

  if (!spectator) {
    const validationError: ValidationError = {
      message: 'Spectator not found',
      error: 'NOT FOUND',
    };
    throw validationError;
  }

  return spectator;
};

const validateSpectator = async (position: number) => {
  if (!position || typeof position !== 'number') {
    const validationError: ValidationError = {
      message: 'The property position must be a number',
      error: 'INVALID FIELD',
    };
    throw validationError;
  }

  const positionOccupied = await Repositories.Spectator.findByPosition(
    position,
  );

  if (positionOccupied) {
    const validationError: ValidationError = {
      message: 'This position is occupied',
      error: 'CONFLICT',
    };
    throw validationError;
  }
};

export default {
  validateIfSpectatorExists,
  validateSpectator,
};
