import express from 'express';
import 'dotenv/config';

import IController from './interfaces/generic.controller.interface';
import IErrorHandler from './interfaces/error.middleware.interface';

import MySQLConnector from './models/connection';
import TalkerModel from './models/talker.model';
import SpectatorModel from './models/spectator.model';

import TalkerService from './services/talker.service';
import SpectatorService from './services/spectator.service';

import TalkerController from './controllers/talker.controller';
import SpectatorController from './controllers/spectator.controller';
import ErrorHandler from './controllers/error.controller';

class ExpressApp {
  private app: express.Application;

  constructor(
    private talkerController: IController,
    private spectatorController: IController,
    private errorMiddleware: IErrorHandler,
  ) {
    this.app = express();

    this.app.use(express.json());

    this.app.post('/talker', this.talkerController.create);
    this.app.get('/talker/:id', this.talkerController.get);
    this.app.put('/talker/:id', this.talkerController.update);
    this.app.delete('/talker/:id', this.talkerController.delete);

    this.app.post('/spectator', this.spectatorController.create);
    this.app.get('/spectator/:id', this.spectatorController.get);
    this.app.put('/spectator/:id', this.spectatorController.update);
    this.app.delete('/spectator/:id', this.spectatorController.delete);

    this.app.use(this.errorMiddleware.handler);
  }

  listen(PORT: number) {
    this.app.listen(PORT, () => {
      console.log(`Server online na porta ${PORT}`);
    });
  }
}

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, PORT } = process.env;

const config = {
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
};

const app = new ExpressApp(
  new TalkerController(
    new TalkerService(new TalkerModel(MySQLConnector.conn(config))),
  ),
  new SpectatorController(
    new SpectatorService(new SpectatorModel(MySQLConnector.conn(config))),
  ),
  new ErrorHandler(),
);

app.listen(parseInt(PORT || '3000', 10));
