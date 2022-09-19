import Character from "./Character.class";
import LongRangeCharacter from "./LongRangeCharacter.class";
import MeleeCharacter from "./MeleeCharacter.class";

const meleeCharacter1 = new MeleeCharacter();
const longRangeCharacter1 = new LongRangeCharacter();

const testarClasses = (character: Character) => {
  character.talk();
  character.specialMove();
};

testarClasses(meleeCharacter1);
testarClasses(longRangeCharacter1);