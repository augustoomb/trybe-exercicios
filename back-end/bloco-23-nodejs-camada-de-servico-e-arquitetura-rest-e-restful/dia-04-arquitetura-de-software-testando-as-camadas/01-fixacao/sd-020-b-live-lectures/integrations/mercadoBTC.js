const axios = require('axios');

async function getPriceBTC() {
  const { data } = await axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/');

  return data.ticker
}

// getPriceBTC();
module.exports = { getPriceBTC };
