const sinon = require('sinon');
const { expect } = require('chai');
const transactionModel = require('../../models/transactions');
const connection = require('../../models/connection');

describe("Teste Model Transaction", () => {
  beforeEach(sinon.restore)

  describe("Consultas de saldo", () => {

    const fakeBalanceBTC = { totalAmount: .00088888, coin: 'BTC' };
    const fakeBalanceBRL = { totalAmount: 123.45, coin: 'BRL' };

    it('Ao consultar saldo em BTC', async () => {
      sinon.stub(connection, 'execute').resolves([[ fakeBalanceBTC ]])

      const balance = await transactionModel.getBalanceBTC();
      expect(balance).to.be.all.keys('coin', 'totalAmount');
    })

    it('Ao consultar saldo em BRL', async () => {
      sinon.stub(connection, 'execute').resolves([[ fakeBalanceBRL ]])

      const balance = await transactionModel.getBalanceBRL();
      expect(balance).to.be.all.keys('coin', 'totalAmount')
    })
  })

  describe("Criações de Transação", () => {
    it('Ao criar uma transação em BTC', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);

      const transaction = await transactionModel.createTransaction({ 
        amount: 876456,
        coin: 'BTC',
        type: 'deposit',
        pass: 1231243
      });

      expect(transaction).to.have.all.keys('id', 'amount', 'coin', 'type');
      expect(transaction.id).to.be.eq(5);
      expect(transaction.coin).to.be.eq('BTC');
    })

    it('Ao criar uma transação em BRL', async () => {})
  })
})