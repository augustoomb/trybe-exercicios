/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Character from '../../src/interfaces/character';
import { MemoryModel } from '../../src/models/memoryModel';
import { CharacterService } from '../../src/services/character';

let memoryModel: MemoryModel<Character>;
let characterService: CharacterService;

describe('Character', () => {
  beforeEach(() => {
    memoryModel = new MemoryModel();
    characterService = new CharacterService(memoryModel);
  });

  describe('Create', () => {
    it('should create a new character', async () => {
      const expected = {
        name: 'Tati'
      };
      await characterService.create(expected);
      expect(await characterService.list()).toEqual(
        expect.arrayContaining([ expect.objectContaining(expected) ])
      );
    });

    it(
      'should create throw an error when trying to create new character with invalid name',
      async () => {
        await expect(
          async () => await characterService.create({
            name: ''
          })
        ).rejects.toHaveProperty(
          'message',
          'O nome precisa ter pelo menos 4 caracteres'
        );
      }
    );
  });

  describe('Find', () => {
    beforeEach(async () => {
      await characterService.create({
        name: 'Tati'
      });
    });
    it('should find an existing character', async () => {
      const expected = {
        name: 'Tati'
      };
      expect(await characterService.find(0)).toEqual(
        expect.objectContaining(expected)
      );
    });

    it('should ot find an inexistent character', async () => {
      expect(await characterService.find(1)).toEqual(null);
    });
  });
});
