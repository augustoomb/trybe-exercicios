import Character from "./Character.class";

export default class LongRangeCharacter extends Character{
  talk(): void {
    console.log(`Uma sobrescrita simples para o método talk() dentro da classe LongRangeCharacter`);
  }
  specialMove(): void {
    console.log(`Uma sobrescrita simples para o método specialMove() dentro da classe LongRangeCharacter`);
  }
  
}