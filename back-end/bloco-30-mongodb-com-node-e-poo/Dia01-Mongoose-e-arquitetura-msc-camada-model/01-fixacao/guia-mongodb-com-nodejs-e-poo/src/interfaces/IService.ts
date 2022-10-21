interface IService<T> {
  create(obj:unknown):Promise<T>,
  readOne(_id:string):Promise<T>,
  read():Promise<T[]>,
  update(id:string, body:unknown): Promise<T>;
  destroy(_id:string):Promise<T>,
}

export default IService;
