import { ErrorRequestHandler } from 'express';
import { ValidationError } from '../utils';

const handler: ErrorRequestHandler = (error, _req, res, _next) => {
  const validationError = error as ValidationError;

  if (validationError.error) {
    const { statusCode, message } = mapValidationError(validationError);
    return res.status(statusCode).json({ message });
  }

  return res.status(500).json('Internal server error');
};

function mapValidationError(error: ValidationError) {
  switch (error.error) {
    case 'NOT FOUND':
      return { statusCode: 404, message: error.message };
    case 'INVALID FIELD':
    case 'CONFLICT':
      return { statusCode: 400, message: error.message };
  }
}

export default { handler };
