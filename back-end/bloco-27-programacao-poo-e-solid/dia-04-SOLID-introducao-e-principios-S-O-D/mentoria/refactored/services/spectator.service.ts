import { ISpectator } from '../interfaces';
import ISpectatorModel from '../interfaces/spectator.model.interface';
import ISpectatorService from '../interfaces/spectator.service.interface';
import { ValidationError } from '.';
import PersonService from './person.service';

export default class SpectatorService
  extends PersonService
  implements ISpectatorService
{
  constructor(private model: ISpectatorModel) {
    super();
  }

  async createSpectator(
    spectatorInfo: Pick<ISpectator, 'name' | 'age'>,
    position: number,
  ): Promise<{ id: number }> {
    const { name, age } = spectatorInfo;

    await this.validatePerson(name, age);
    await this.validateSpectator(position);

    const id = await this.model.create({ name, age, position });

    return { id };
  }
  async getSpectator(id: number) {
    const spectator = await this.model.findById(id);

    if (!spectator) {
      const validationError: ValidationError = {
        message: 'Spectator not found',
        error: 'NOT FOUND',
      };
      throw validationError;
    }

    return spectator;
  }
  async updateSpectator(id: number, position: number) {
    await this.validateSpectator(position);
    await this.validateIfSpectatorExists(id);

    await this.model.update(id, position);
  }
  async deleteSpectator(id: number) {
    await this.validateIfSpectatorExists(id);

    await this.model.remove(id);
  }

  async validateIfSpectatorExists(id: number): Promise<ISpectator> {
    const spectator = await this.model.findById(id);

    if (!spectator) {
      const validationError: ValidationError = {
        message: 'Spectator not found',
        error: 'NOT FOUND',
      };
      throw validationError;
    }

    return spectator;
  }

  async validateSpectator(position: number) {
    if (!position || typeof position !== 'number') {
      const validationError: ValidationError = {
        message: 'The property position must be a number',
        error: 'INVALID FIELD',
      };
      throw validationError;
    }

    const positionOccupied = await this.model.findByPosition(position);

    if (positionOccupied) {
      const validationError: ValidationError = {
        message: 'This position is occupied',
        error: 'CONFLICT',
      };
      throw validationError;
    }
  }
}
