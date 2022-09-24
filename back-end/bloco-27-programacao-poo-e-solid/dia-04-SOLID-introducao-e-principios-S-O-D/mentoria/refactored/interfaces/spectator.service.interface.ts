import { ISpectator } from '.';

export default interface ISpectatorService {
  createSpectator(
    spectatorInfo: Pick<ISpectator, 'name' | 'age'>,
    position: ISpectator['position'],
  ): Promise<{ id: number }>;

  getSpectator: (id: number) => Promise<ISpectator>;

  updateSpectator: (
    id: number,
    position: ISpectator['position'],
  ) => Promise<void>;

  deleteSpectator: (id: number) => Promise<void>;
}
