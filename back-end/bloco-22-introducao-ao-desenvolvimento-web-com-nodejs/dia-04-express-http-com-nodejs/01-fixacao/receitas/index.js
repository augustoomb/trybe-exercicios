/* index.js */
const express = require('express');
const app = express();


// CORS
const cors = require('cors');
app.use(cors());


// BODY PARSER - npm i body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  return res.status(201).json({ message: 'Recipe created successfully!' })
})

app.get('/recipes', function (req, res) {
  res.json(recipes.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }));
});

// search vai ser uma query string
// para chamar essa rota, seria algo assim: http://localhost:3001/recipes/search?name=Macarrão&maxPrice=40&minPrice=30
// ESSA ROTA PRECISA VIR ANTES DA ROTA /:id
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice) && r.price > Number(minPrice));
  return res.status(200).json(filteredRecipes);
});


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id)); //id foi convertido para Number, pois chega como string

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found!' });
  }

  return res.status(200).json(recipe);
})

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id)); // descobre qual a posição do obj informado, no arr

  if (recipeIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found!' });
  }

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  return res.status(204).end();
})

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});



// DRINKS

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!' })
})


app.get('/drinks', function (req, res) {
  res.json(drinks.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  }));
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === Number(id));

  if (!drink) {
    return res.status(404).json({ message: 'Drink not found!' })
  }

  res.status(200).json(drink);
})

// FAZ COM QUE, AO TENTAR ACESSAR ROTAS QUE NÃO EXISTEM, EU TENHA UM RETORNO COM ERRO MAIS LEGÍVEL AO USUÁRIO
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

/*
Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação,
é preciso instalar um módulo que libera o acesso da nossa API para outras aplicações.
Para isso basta instalar um módulo chamado cors usando npm i cors e adicionar
as seguintes linhas no seu arquivo index.js.
*/