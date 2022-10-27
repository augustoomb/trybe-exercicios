import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';
import FrameController from '../../../controllers/Frame';
import FrameService from '../../../services/Frame';
import FrameModel from '../../../models/Frame';


describe('Frame Controller', () => {
  const frameModel = new FrameModel()
  const frameService = new FrameService(frameModel);
  const frameController = new FrameController(frameService);
  // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
  const req = {} as Request; 
  // o mesmo acontece com o segundo parâmetro
  const res = {} as Response;
  // const next = (sinon.stub() as unknown) as NextFunction; //   não vamos usar mas poderíamos dublá-lo assim 
  // expect((next as sinon.SinonStub).calledWith(fakeError)).to.be.true; //   testá-lo assim
  


  before(() => {
    sinon.stub(frameService, 'create').resolves(frameMock);
    sinon.stub(frameService, 'readOne').resolves(frameMock);
    sinon.stub(frameService, 'read').resolves([frameMock]);
    sinon.stub(frameService, 'destroy').resolves(frameMockWithId);
    sinon.stub(frameService, 'update').resolves(frameMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Frame', () => {
    it('Success', async () => {
      req.body = frameMock;
      await frameController.create(req, res);
      // o cast de `res.status` é feito pois `res` foi criado como do tipo `Resquest` 
      // e agora, que queremos validar com o que foi chamado, precisar ser tratado como um `sinon.SinonStub`
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('ReadOne Frame', () => {
    it('Success', async () => {
      // como fizemos o dublê da service o valor do `req.params.id` não vai chegar na model
      // logo ele só precisa ser um string e existir
      req.params = { id: frameMockWithId._id };
      await frameController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock)).to.be.true;
    });
  });

  describe('Update Frame', () => {
    it('Success', async () => {
      req.params = { id: 'a validação é feita na model, estão tanto faz aqui' }
      req.body = frameMock
      await frameController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });

  describe('Delete Frame', () => {
    it('Success', async () => {
      req.params = { id: frameMockWithId._id }
      await frameController.destroy(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMockWithId)).to.be.true;
    });
  });

  describe('Read Frame', () => {
    it('Success', async () => {
      await frameController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith()).to.be.true;
    });
  });
});