export default interface IModel<T> {
  create(data: T): Promise<number>;
  findById(id: number): Promise<T>;
  update(id: number, field: number): Promise<void>;
  remove(id: number): Promise<void>;
  remove(id: number): Promise<void>;
}