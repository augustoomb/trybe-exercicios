import IModel from './generic.model.interface';
import { ITalker } from '.';

export default interface ITalkerModel extends IModel<ITalker> {
  findByDisplayOrder(displayOrder: number): Promise<ITalker>;
}
