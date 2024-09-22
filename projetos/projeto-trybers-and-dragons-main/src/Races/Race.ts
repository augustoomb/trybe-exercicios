export default abstract class Race {
  protected _name: string;
  protected _dexterity: number;
  // private static _RacesInstances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    // Race._RacesInstances += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances():number {
    // implementação definida para cada classe filha
    throw new Error('Not implemented'); 
  }

  abstract get maxLifePoints(): number;
}
