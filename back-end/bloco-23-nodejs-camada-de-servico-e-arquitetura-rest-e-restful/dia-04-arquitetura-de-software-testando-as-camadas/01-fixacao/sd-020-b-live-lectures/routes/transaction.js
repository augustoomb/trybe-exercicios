const express = require('express');

const routes = express.Router();

const tradeController = require('../controllers/transactions');

routes.post('/buy', tradeController.buyBTC);
routes.post('/sell', tradeController.sellBTC);

module.exports = routes;