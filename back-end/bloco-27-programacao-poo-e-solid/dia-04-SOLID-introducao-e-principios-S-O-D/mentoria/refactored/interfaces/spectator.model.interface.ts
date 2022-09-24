import { ISpectator } from '.';
import IModel from './generic.model.interface';

export default interface ISpectatorModel extends IModel<ISpectator> {
  findByPosition(position: number): Promise<ISpectator>;
}
