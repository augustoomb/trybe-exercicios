const express = require('express');
const userRouter = require('./routers/userRouter');

const app = express();
app.use(express.json());

// TUDO O QUE FOR PARA ROTAS INICIADAS EM /user
app.use('/user', userRouter);

app.use((err, _req, res, _next) => {
  return res.status(500).json({ message: err.message });
})

app.listen(3001, () => {
  console.log(`Ouvindo a porta 3001`);
});