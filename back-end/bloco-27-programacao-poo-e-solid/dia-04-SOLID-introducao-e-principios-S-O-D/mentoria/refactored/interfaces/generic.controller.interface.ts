import { RequestHandler } from 'express';

export default interface IController {
  create: RequestHandler;
  get: RequestHandler;
  update: RequestHandler;
  delete: RequestHandler;
}
