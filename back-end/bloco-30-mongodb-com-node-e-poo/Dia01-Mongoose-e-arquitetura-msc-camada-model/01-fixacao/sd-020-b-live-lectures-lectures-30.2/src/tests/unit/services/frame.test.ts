import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import FrameModel from '../../../models/Frame';
import FrameService from '../../../services/Frame';
import { frameMock, frameMockPartial, frameMockWithId, frameMockWrong } from '../../mocks/frameMock';

describe('Frame Service', () => {
	const frameModel = new FrameModel();
	const frameService = new FrameService(frameModel);

	before(() => {
		sinon.stub(frameModel, 'create').resolves(frameMockWithId);
		sinon.stub(frameModel, 'readOne')
			.onCall(0).resolves(frameMockWithId)
			.onCall(1).resolves(null);
		sinon.stub(frameModel, 'update')
			.onCall(0).resolves(frameMockWithId)
			.onCall(1).resolves(null)
			.onCall(2).resolves(frameMockWithId);

	});

	after(() => {
		sinon.restore()
	});

	describe('Create Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.create(frameMock);

			expect(frameCreated).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
			try {
				await frameService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('ReadOne Frame', () => {
		it('Success', async () => {
			const frameCreated = await frameService.readOne(frameMockWithId._id);

			expect(frameCreated).to.be.deep.equal(frameMockWithId);
		});

		it('Failure', async () => {
			try {
				// a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
				await frameService.readOne(frameMockWithId._id);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Update Frame', () => {
		it('Success', async () => {
			const frameUpdated = await frameService.update('62cf1fc6498565d94eba52cd', frameMock);
			expect(frameUpdated).to.be.deep.equal(frameMockWithId);
		});

		it('Failure: entity not found', async () => {
			let errorToTest;
			try {
				await frameService.update(frameMockWithId._id, frameMock)
			} catch (error: any) {
				errorToTest = error;
			}
			expect(errorToTest.message).to.be.equal(ErrorTypes.EntityNotFound);
		});

		it('Failure: entity is not valid', async () => {
			let errorToTest;
			try {
				await frameService.update(frameMockWithId._id, frameMockWrong)
			} catch (error: any) {
				errorToTest = error;
			}
			expect(errorToTest).to.be.instanceOf(ZodError);
		});

		it('Success: deve ser possível atualizar apenas alguns atributos', async () => {
			const frameUpdated = await frameService.update('62cf1fc6498565d94eba52cd', frameMockPartial);
			expect(frameUpdated).to.be.deep.equal(frameMockWithId);
		});

		
	});
});