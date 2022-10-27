import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import {
	lensMockForChange,
	lensMockForChangeWithId,
} from '../../mocks/lensMock';
import { ErrorTypes } from '../../../errors/catalog';

describe('Lens Model', () => {
	const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'findByIdAndUpdate').resolves(lensMockForChangeWithId);
	});

	after(() => {
		sinon.restore();
	});

	describe('changing a lens', () => {
		it('successfully changed', async () => {
			const lensChanged = await lensModel.update('62cf1fc6498565d94eba52cd', lensMockForChange);
			expect(lensChanged).to.be.deep.equal(lensMockForChangeWithId);
		});

		it('_id not found to change', async () => {
			try {
				await lensModel.update('123ERRADO', lensMockForChange);
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

});