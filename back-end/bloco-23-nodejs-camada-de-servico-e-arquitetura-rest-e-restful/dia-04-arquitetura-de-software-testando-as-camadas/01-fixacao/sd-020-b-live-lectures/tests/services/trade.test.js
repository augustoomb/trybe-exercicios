const sinon = require('sinon');
const { expect } = require('chai');
const transactionModel = require('../../models/transactions');
const tradeService = require('../../services/trade');
const mercadoBTC = require('../../integrations/mercadoBTC');

describe("Teste Service Trade", () => {
  beforeEach(sinon.restore)

  describe("Compra e venda de BTC", () => {
    it('Ao comprar em BTC', async () => {
      sinon.stub(transactionModel, 'getBalanceBRL').resolves({ totalAmount: 10001.00 });
      sinon.stub(mercadoBTC, 'getPriceBTC').resolves( {
        buy: "121098.46381",
        sell: "121199.99999999",
      })
      
      sinon.stub(transactionModel, 'createTransaction')
           .onCall(0).resolves()
           .onCall(1).resolves()

      const buy = await tradeService.buyBTC({ amountBRL: 10000.00 });

      expect(buy).to.have.all.keys("code", "data");
      expect(buy.data).to.have.keys("fraction", "amountBRL")
      expect(buy.data.fraction).to.be.equal("0.08257743");
    })

    it('Quando não tiver saldo suficiente', async () => {
      sinon.stub(transactionModel, 'getBalanceBRL').resolves({ totalAmount: 10.00 })

      const buy = await tradeService.buyBTC({ amountBRL: 100.00 });

      expect(buy).to.have.keys('code', 'message');
      expect(buy.message).to.be.eq('Saldo insuficiente!');
    })
  })
})