import { ITalker } from '../interfaces';
import Repositories from '../models';
import Validators, { ValidationError } from '../utils';

const createTalker = async (
  talkerInfo: Pick<ITalker, 'name' | 'age'>,
  displayOrder: number,
): Promise<{ id: number }> => {
  const { name, age } = talkerInfo;

  await Validators.Person.validatePerson(name, age);
  await Validators.Talker.validateTalkerDisplayOrder(displayOrder);

  const newTalker = await Repositories.Talker.create({
    name,
    age,
    displayOrder,
  });

  return { id: newTalker };
};

const getTalker = async (id: number): Promise<ITalker> => {
  const talker = await Repositories.Talker.findById(id);

  if (!talker) {
    const validationError: ValidationError = {
      message: 'Talker not found',
      error: 'NOT FOUND',
    };
    throw validationError;
  }
  return talker;
};

const updateTalker = async (
  id: number,
  displayOrder: number,
): Promise<void> => {
  await Validators.Talker.validateIfTalkerExists(id);
  await Validators.Talker.validateTalkerDisplayOrder(displayOrder);

  await Repositories.Talker.update(id, displayOrder);
};

const deleteTalker = async (id: number): Promise<void> => {
  await Validators.Talker.validateIfTalkerExists(id);

  Repositories.Talker.remove(id);
};

export default { createTalker, getTalker, updateTalker, deleteTalker };
