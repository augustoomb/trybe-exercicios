import { ISpectator } from '../interfaces';
import Repositories from '../models';
import Validators, { ValidationError } from '../utils';

const createSpectator = async (
  spectatorInfo: Pick<ISpectator, 'name' | 'age'>,
  position: number,
) => {
  const { name, age } = spectatorInfo;

  await Validators.Person.validatePerson(name, age);
  await Validators.Spectator.validateSpectator(position);

  const id = await Repositories.Spectator.create({ name, age, position });

  return { id };
};

const getSpectator = async (id: number): Promise<ISpectator> => {
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

const updateSpectator = async (id: number, position: number): Promise<void> => {
  await Validators.Spectator.validateSpectator(position);
  await Validators.Spectator.validateIfSpectatorExists(id);

  await Repositories.Spectator.update(id, position);
};

const deleteSpectator = async (id: number): Promise<void> => {
  await Validators.Spectator.validateIfSpectatorExists(id);

  await Repositories.Spectator.remove(id);
};

export default {
  createSpectator,
  getSpectator,
  updateSpectator,
  deleteSpectator,
};
