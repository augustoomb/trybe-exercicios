import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _chara1: Fighter = new Character('charac1');
  private _arrOpponents: SimpleFighter[] = [new Monster()];

  constructor(chara1: Fighter, arrOpponents: SimpleFighter[]) { 
    super(chara1);
    this._chara1 = chara1;
    this._arrOpponents = arrOpponents;
  }

  fight(): number {
    this._arrOpponents.forEach((opponent) => {
      this._chara1.attack(opponent);
      opponent.attack(this._chara1);
    });

    const result = super.fight(); // SE 1: charac1 GANHOU; SE -1, charac2 GANHOU
    return result;
  }

  // fight(): number {
  //   while (this._chara1.lifePoints !== -1 
  //     && this._arrOpponents[0].lifePoints !== -1) {
  //     this._chara1.attack(this._arrOpponents[0]);
  //     this._arrOpponents[0].attack(this._chara1);
  //   }
    
  //   // return this._chara1.lifePoints === -1 ? -1 : 1;
  //   const result = super.fight(); // SE 1: charac1 GANHOU; SE -1, charac2 GANHOU
  //   return result;
  // }
}

// const pve = new PVE();

// pve.fight();