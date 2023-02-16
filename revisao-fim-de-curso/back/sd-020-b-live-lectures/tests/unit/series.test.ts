/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Series from '../../src/interfaces/series';
import { SimpleMemoryModel } from '../../src/models/memoryModel';
import { SeriesService } from '../../src/services/series';

let memoryModel: SimpleMemoryModel<Series>;
let seriesService: SeriesService;

describe('series', () => {
  beforeEach(() => {
    memoryModel = new SimpleMemoryModel();
    seriesService = new SeriesService(memoryModel);
  });

  describe('Create', () => {
    it('should create a new series', async () => {
      await seriesService.create({
        name: 'ZambLandia'
      });

      const expected = { name: 'ZambLandia' };
      expect(await seriesService.list()).toEqual(
        expect.arrayContaining([ expect.objectContaining(expected) ])
      );
    });

    it(
      'should create throw an error when trying to create new series with invalid name',
      async () => {
        await expect(
          async () => await seriesService.create({ name: 'Z' })
        ).rejects.toHaveProperty(
          'message',
          'O nome precisa ter pelo menos 4 caracteres'
        );
      }
    );
  });

  describe('Find', () => {
    it('should find an existing series', async () => {
      await seriesService.create({
        name: 'ZambLandia'
      });

      const expected = { name: 'ZambLandia' };
      expect(await seriesService.find(0)).toEqual(
        expect.objectContaining(expected)
      );
    });

    it('should ot find an inexistent series', async () => {
      await seriesService.create({
        name: 'ZambLandia'
      });
      expect(await seriesService.find(1)).toEqual(null);
    });
  });
});
