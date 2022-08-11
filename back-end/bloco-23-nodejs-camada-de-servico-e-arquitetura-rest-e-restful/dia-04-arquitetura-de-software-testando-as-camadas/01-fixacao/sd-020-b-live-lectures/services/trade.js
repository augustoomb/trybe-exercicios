
const mercadoBTC = require('../integrations/mercadoBTC');
const transactionModel = require('../models/transactions');
const { schemaBuySell, validator } = require('../utils/schemas');
const { FLOAT_CONTROL_BRL, FLOAT_CONTROL_BTC } = require('../utils/constants');

async function buyBTC({ amountBRL }) {
  validator(schemaBuySell, { amountBRL });

  const balance = await transactionModel.getBalanceBRL();

  if(balance.totalAmount < amountBRL){
    return { code: 403, message: 'Saldo insuficiente!' }
  }

  const btc = await mercadoBTC.getPriceBTC();

  const fraction = (amountBRL / btc.buy).toFixed(8);

  await transactionModel.createTransaction({ amount: -(amountBRL * FLOAT_CONTROL_BRL), type: 'withdraw', coin: 'BRL'});

  await transactionModel.createTransaction({ amount: fraction * FLOAT_CONTROL_BTC, type: 'deposit', coin: 'BTC'});

  return { code: 201, data: { fraction, amountBRL } }
}

async function sellBTC({ amountBRL }) {
  validator(schemaBuySell, { amountBRL });

  const btc = await  mercadoBTC.getPriceBTC();

  const fraction = (amountBRL / btc.sell).toFixed(8);

  const balance = await transactionModel.getBalanceBTC();

  if(balance.totalAmount < fraction){
    throw { code: 403, message: 'Saldo insuficiente!' }
  }

  await transactionModel.createTransaction({ amount: amountBRL * FLOAT_CONTROL_BRL, type: 'deposit', coin: 'BRL'});

  await transactionModel.createTransaction({ amount: -(fraction * FLOAT_CONTROL_BTC), type: 'withdraw', coin: 'BTC'});

  return { code: 201, data: { fraction, amountBRL } }
}

// buyBTC({ amountBRL: '123.456456' }).then(result => console.log(result)).catch(result => console.log(result))
// sellBTC({ amountBRL: 100 }).then(result => console.log(result))

module.exports = { buyBTC, sellBTC }