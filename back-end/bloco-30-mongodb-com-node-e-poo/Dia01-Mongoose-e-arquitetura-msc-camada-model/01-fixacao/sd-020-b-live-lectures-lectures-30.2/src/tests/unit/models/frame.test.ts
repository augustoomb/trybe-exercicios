import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import {
	frameMock,
	frameMockWithId,
	frameMockForChange,
	frameMockForChangeWithId,
} from '../../mocks/frameMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Frame Model', () => {
	const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockForChangeWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const frameFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(frameFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});
	
	describe('changing a frame', () => {
		it('successfully changed', async () => {
			const framesChanged = await frameModel.update('62cf1fc6498565d94eba52cd', frameMockForChange);
			expect(framesChanged).to.be.deep.equal(frameMockForChangeWithId);
		});
	
		it('_id not found to change', async () => {
			try {
				await frameModel.update('123ERRADO', frameMockForChange);
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});
	
});
