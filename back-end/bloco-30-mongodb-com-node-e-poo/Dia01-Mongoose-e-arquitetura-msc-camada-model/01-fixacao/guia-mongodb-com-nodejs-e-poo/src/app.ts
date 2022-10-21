import express from 'express';
import 'express-async-errors'; // Esse pacote irá capturar os erros assíncronos dentro dos middlewares e colocá-los no next, passando esses erros para o próximo middleware que captura erros, o famoso ErrorHandler.
import errorHandler from './middlewares/error';
import frameRouter from './routes/frame';

const app = express();
app.use(express.json());
app.use(frameRouter);
app.use(errorHandler);

export default app;