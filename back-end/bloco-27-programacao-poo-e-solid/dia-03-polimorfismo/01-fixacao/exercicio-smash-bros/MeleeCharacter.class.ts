import Character from "./Character.class";

export default class MeleeCharacter extends Character{
  talk(): void {
    console.log(`Uma sobrescrita simples para o método talk() dentro da classe MeleeCharacter`);
  }

  specialMove(): void {
    console.log(`Uma sobrescrita simples para o método specialMove() dentro da classe MeleeCharacter`);
  }
}