import { ErrorRequestHandler } from 'express';
import IErrorHandler from '../interfaces/error.middleware.interface';
import { ValidationError } from '../services';

export default class ErrorHandler implements IErrorHandler {
  handler: ErrorRequestHandler = (error, _req, res, _next) => {
    const validationError = error as ValidationError;

    if (validationError.error) {
      const { statusCode, message } = this.mapValidationError(validationError);
      return res.status(statusCode).json({ message });
    }
    console.error(error);
    return res.status(500).json('Internal server error');
  };

  mapValidationError(validationError: ValidationError) {
    switch (validationError.error) {
      case 'NOT FOUND':
        return { statusCode: 404, message: validationError.message };
      case 'INVALID FIELD':
      case 'CONFLICT':
        return { statusCode: 400, message: validationError.message };
      default:
        throw new Error('Non exhaustive switch case');
    }
  }
}
