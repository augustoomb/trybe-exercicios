const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const saleoffController = require('./controllers/saleoffController');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products/', productController);
app.use('/users/', userController);
app.use('/saleoffs', saleoffController);

app.listen(3001, () => {
  console.log('App ouvindo a porta 3001!');
});