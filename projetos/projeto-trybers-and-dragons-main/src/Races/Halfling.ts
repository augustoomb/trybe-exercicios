import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _RacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.addRacesInstances();
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  private static addRacesInstances(): void {
    this._RacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._RacesInstances;
  }
}
