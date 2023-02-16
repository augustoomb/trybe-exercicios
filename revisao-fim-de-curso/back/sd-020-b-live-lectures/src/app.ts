import express, { NextFunction, Request, Response } from 'express';
import BaseHTTPError from './errors/httpError';
import * as routers from './routes';
import path from 'path'

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => res.status(200).send());

app.get('/', (_req,res)=> res.sendFile(path.join(__dirname, 'views', 'index.html')));

app.use('/characters', routers.characterRouter);
app.use('/series', routers.seriesRouter);
app.use('/casts', routers.castRouter);
app.use('/castCharacters', routers.castCharacterRouter);

app.use((err: BaseHTTPError, _: Request, res: Response, __: NextFunction) => {

  if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // eslint-disable-next-line no-console
  console.error(err.message);
  return res.status(500).json({ message: 'Erro interno' });
});

export default app;