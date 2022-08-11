const sinon = require('sinon');
const { expect } = require('chai');
const tradeService = require('../../services/trade');
const transactionsController = require('../../controllers/transactions');
const { func } = require('joi');

describe("Teste Controllers Transactions", () => {
  beforeEach(sinon.restore)

  describe("Compra e venda de BTC pela API", () => {
    it('Ao comprar em BTC via API', async () => {
      sinon.stub(tradeService, 'buyBTC').resolves({ data: null, code: 201, message: null})

      const req = {};
      const res = {}

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      res.end = sinon.stub().returns();

      await transactionsController.buyBTC(req, res);

      // expect(req.status.calledWith(201)).to.be.eq(true)
      expect(res.status.calledWith(201)).to.be.true
    })
  })
})