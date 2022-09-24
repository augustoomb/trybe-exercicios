import { ITalker } from '.';

export default interface ITalkerService {
  createTalker: (
    talkerInfo: Pick<ITalker, 'name' | 'age'>,
    displayOrder: ITalker['displayOrder'],
  ) => Promise<{
    id: number;
  }>;

  getTalker: (id: number) => Promise<ITalker>;

  updateTalker: (id: number, displayOrder: number) => Promise<void>;

  deleteTalker: (id: number) => Promise<void>;
}
