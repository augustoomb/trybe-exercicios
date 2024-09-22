import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _RacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.addRacesInstances();
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  private static addRacesInstances(): void {
    this._RacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._RacesInstances;
  }
}
