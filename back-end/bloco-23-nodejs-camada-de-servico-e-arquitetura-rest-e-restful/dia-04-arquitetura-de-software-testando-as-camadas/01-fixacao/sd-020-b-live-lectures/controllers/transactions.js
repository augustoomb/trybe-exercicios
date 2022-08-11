const tradeService = require('../services/trade');

async function buyBTC(req, res) {
  const { data, code, message } = await tradeService.buyBTC(req.body);

  if (message) {
    return res.status(code).json({ message });
  }
  // res.status(code);
  return res.status(code).json({ data }).end();
}


async function sellBTC(req, res) {
  const { data, code } = await tradeService.sellBTC(req.body);

  return res.status(code).json(data);
}

module.exports = { sellBTC, buyBTC }