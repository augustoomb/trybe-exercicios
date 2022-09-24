import { ITalker } from '../interfaces';
import ITalkerModel from '../interfaces/talker.model.interface';
import ITalkerService from '../interfaces/talker.service.interface';
import { ValidationError } from '.';
import PersonService from './person.service';

export default class TalkerService
  extends PersonService
  implements ITalkerService
{
  constructor(private model: ITalkerModel) {
    super();
  }

  async createTalker(
    talkerInfo: Pick<ITalker, 'name' | 'age'>,
    displayOrder: number,
  ) {
    const { name, age } = talkerInfo;

    await this.validatePerson(name, age);
    await this.validateTalkerDisplayOrder(displayOrder);

    const newTalker = await this.model.create({
      name,
      age,
      displayOrder,
    });

    return { id: newTalker };
  }

  async getTalker(id: number) {
    const talker = await this.model.findById(id);

    if (!talker) {
      const validationError: ValidationError = {
        message: 'Talker not found',
        error: 'NOT FOUND',
      };
      throw validationError;
    }
    return talker;
  }

  async updateTalker(id: number, displayOrder: number) {
    await this.validateIfTalkerExists(id);
    await this.validateTalkerDisplayOrder(displayOrder);

    await this.model.update(id, displayOrder);
  }

  async deleteTalker(id: number) {
    await this.validateIfTalkerExists(id);

    this.model.remove(id);
  }

  async validateIfTalkerExists(id: number) {
    const talker = await this.model.findById(id);

    if (!talker) {
      const validationError: ValidationError = {
        message: 'Talker not found',
        error: 'NOT FOUND',
      };
      throw validationError;
    }
  }

  async validateTalkerDisplayOrder(displayOrder: number) {
    if (!displayOrder || typeof displayOrder !== 'number') {
      const validationError: ValidationError = {
        message: 'The property displayOrder must be a number',
        error: 'INVALID FIELD',
      };
      throw validationError;
    }

    const displayOrderOccupied = await this.model.findByDisplayOrder(
      displayOrder,
    );

    if (displayOrderOccupied) {
      const validationError: ValidationError = {
        message: 'This display order is occupied',
        error: 'CONFLICT',
      };
      throw validationError;
    }
  }
}
