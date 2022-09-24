import Repositories from '../models';
import { ValidationError } from '.';

const validateIfTalkerExists = async (id: number) => {
  const talker = await Repositories.Talker.findById(id);

  if (!talker) {
    const validationError: ValidationError = {
      message: 'Talker not found',
      error: 'NOT FOUND',
    };
    throw validationError;
  }
};

const validateTalkerDisplayOrder = async (displayOrder: number) => {
  if (!displayOrder || typeof displayOrder !== 'number') {
    const validationError: ValidationError = {
      message: 'The property displayOrder must be a number',
      error: 'INVALID FIELD',
    };
    throw validationError;
  }

  const displayOrderOccupied = await Repositories.Talker.findByDisplayOrder(
    displayOrder,
  );

  if (displayOrderOccupied) {
    const validationError: ValidationError = {
      message: 'This display order is occupied',
      error: 'CONFLICT',
    };
    throw validationError;
  }
};

export default { validateIfTalkerExists, validateTalkerDisplayOrder };
