export interface IPerson {
  id?: number;
  name: string;
  age: number;
}

export interface ISpectator extends IPerson {
  position: number; // é o lugar onde a pessoa vai se sentar
}

export interface ITalker extends IPerson {
  displayOrder: number; // é a ordem em que vai se apresentar
}
