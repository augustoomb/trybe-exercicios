import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _RacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.addRacesInstances();
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  private static addRacesInstances(): void {
    this._RacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._RacesInstances;
  }
}
