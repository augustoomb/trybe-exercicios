import express from 'express';

import Controllers from './controllers';

const app = express();

app.use(express.json());

app.post('/talker', Controllers.Talker.createTalker);
app.get('/talker/:id', Controllers.Talker.getTalker);
app.put('/talker/:id', Controllers.Talker.updateTalker);
app.delete('/talker/:id', Controllers.Talker.deleteTalker);

app.post('/spectator', Controllers.Spectator.createSpectator);
app.get('/spectator/:id', Controllers.Spectator.getSpectator);
app.put('/spectator/:id', Controllers.Spectator.updateSpectator);
app.delete('/spectator/:id', Controllers.Spectator.deleteSpectator);

app.use(Controllers.Error.handler);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
