/* index.js */
const express = require('express');
const bodyParser = require('body-parser'); // sem ele não funciona "req.body"
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (_req, res) {
  res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/fechado', authMiddleware, function (req, res) {
  res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });


// PARA ERROS SINCRONOS. ERROS GERADOS (E TRATADOS) EM OUTRAS ROTAS CHEGAM AQUI
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });



// const express = require('express');
// const bodyParser = require('body-parser');
// const authMiddleware = require('./auth-middleware'); // middleware (criado num outro arquivo) para verificar credenciais do usuário

// const router = express.Router(); // usar router.get ao inves de app.get q eu usava antes

// const app = express();
// app.use(bodyParser.json());

// // OBS: a parte de function + req/res que eu já usava antes também pode ser chamada de middleware
// // .. assim como as funções adicionais que estou aprendendo agora.

// // Esta rota não passa pelo middleware de autenticação!
// app.get('/open', function (req, res) {
//   res.send('open!')
// });

// // todas as rotas daqui para baixo, passam obrigatoriamente por esse middleware
// app.use(authMiddleware); // pelos meus testes, ele é o primeiro middleware que a rota passa

// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];

// // essa e todas as rotas daqui para baixo vao passar pelo authMiddleware, já que eu coloquei o "use" nele na linha 13
// app.get('/recipes', function (req, res) {
//   res.status(200).json(recipes);
// });

// //EX DE REQUIIÇÃO PARA A ROTA ABAIXO: http://localhost:3001/recipes/search?name=Macarrão&maxPrice=40
// app.get('/recipes/search', function (req, res) {
//   const { name, maxPrice } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
//   res.status(200).json(filteredRecipes);
// });

// app.get('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipe = recipes.find((r) => r.id === Number(id));
//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

//   res.status(200).json(recipe);
// });

// // ...
// function validateName(req, res, next) {
//   const { name } = req.body;
//   if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });
//   next();
// };

// function validatePrice(req, res, next) {
//   const { price } = req.body;
//   if (isNaN(price) || price < 0) return res.status(400).json({ message: 'Invalid price!' });
//   next();
// };

// app.post('/recipes', validateName, validatePrice, function (req, res) {
//   const { id, name, price } = req.body;
//   const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.,  ///ATENÇÃO AQUI, MESMO COMENTADO
//   recipes.push({ id, name, price, chef: username });
//   res.status(201).json({ message: 'Recipe created successfully!' });
// });

// app.put('/recipes/:id', validateName, validatePrice, function (req, res) {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const recipesIndex = recipes.findIndex((r) => r.id === Number(id));

//   if (recipesIndex === -1)
//     return res.status(404).json({ message: 'Recipe not found!' });

//   recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

//   res.status(204).end();
// });
// // ...



// //parte antiga, sem middleware de validação

// // app.post('/recipes', function (req, res) {
// //   const { id, name, price, waitTime } = req.body;
// //   recipes.push({ id, name, price, waitTime });
// //   res.status(201).json({ message: 'Recipe created successfully!' });
// // });

// // app.put('/recipes/:id', function (req, res) {
// //   const { id } = req.params;
// //   const { name, price, waitTime } = req.body;
// //   const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

// //   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

// //   recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

// //   res.status(204).end();
// // });





// app.delete('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes.splice(recipeIndex, 1);

//   res.status(204).end();
// });

// app.all('*', function (req, res) {
//   return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
// });

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });