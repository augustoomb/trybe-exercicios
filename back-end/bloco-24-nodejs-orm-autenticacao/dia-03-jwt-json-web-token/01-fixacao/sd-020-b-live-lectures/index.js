const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/users', routes.userRouter);
app.use('/phrases', routes.phraseRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Api on ${PORT}`));