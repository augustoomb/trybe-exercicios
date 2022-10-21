import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(lensMockWithId); // mocko o metodo do mongoose
    sinon.stub(Model, 'findOne').resolves(lensMockWithId);// mocko o metodo do mongoose
    sinon.stub(Model, 'find').resolves([lensMockWithId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
  })

  after(() => {
    sinon.restore();
  })

  describe('criando uma Lens', () => {
    it('criado com sucesso', async () => {
      const newLens = await lensModel.create(lensMock); // testo meus métodos
      expect(newLens).to.be.deep.equal(lensMockWithId);
    })
  })

  describe('buscando uma lens', () => {
    it('com sucesso', async () => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');  // testo meus métodos
      expect(lensFound).to.be.deep.eq(lensMockWithId);
    })

    it('id não encontrado', async () => {
      try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
    })
  })

  describe('Deletando', () => {
    it('com sucesso', async () => {
      const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensDeleted).to.be.deep.equal(lensMockWithId);
    });
  
    it('id não encontrado', async () => {
      try {
        await lensModel.destroy('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
})