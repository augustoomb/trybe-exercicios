import { ValidationError } from '.';

export default abstract class PersonService {
  validatePerson = async (name: string, age: number) => {
    if (!name || typeof name !== 'string') {
      const validationError: ValidationError = {
        message: 'The property name must be a string',
        error: 'INVALID FIELD',
      };
      throw validationError;
    }

    if (!age || typeof age !== 'number') {
      const validationError: ValidationError = {
        message: 'The property age must be a number',
        error: 'INVALID FIELD',
      };
      throw validationError;
    }

    if (age <= 0) {
      const validationError: ValidationError = {
        message: 'The property age must be greater than 0',
        error: 'INVALID FIELD',
      };
      throw validationError;
    }
  };
}
