import express from 'express';
import * as moviesController from './controllers/movies';

const app = express();

app.use(express.json());

app.get('/movies', moviesController.listAll);
app.post('/movies', moviesController.createMovie);

app.listen(3001, () => console.log(`Running on port 3001`))