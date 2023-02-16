import BadRequest from '../errors/badRequest';
import Series from '../interfaces/series';
import { SimpleModel } from '../models/model';
import SeriesModel from '../models/series';
import Service from './service';

export class SeriesService extends Service<Series> {
  constructor(model: SimpleModel<Series> = new SeriesModel()) {
    super(model);
  }

  async create(obj: Series): Promise<void> {
    if (obj.name.length <= 3) {
      throw new BadRequest('O nome precisa ter pelo menos 4 caracteres');
    }
    return super.create(obj);
  }

}
