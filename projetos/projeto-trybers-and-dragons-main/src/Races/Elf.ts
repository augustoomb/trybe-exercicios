import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _RacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.addRacesInstances();
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  private static addRacesInstances(): void {
    this._RacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._RacesInstances;
  }
}
