import { ErrorRequestHandler } from 'express';

export default interface IErrorHandler {
  handler: ErrorRequestHandler;
}
