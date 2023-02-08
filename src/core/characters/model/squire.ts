import { Character, DtoCharacter } from "./character";

export class Squire extends Character {
  public knight: string;
  public loyalty: number;

  constructor(dtoS: DtoCharacter, path: string) {
    const dtoSquire: DtoCharacter = {
      series: dtoS.series,
      name: dtoS.name,
      family: dtoS.family,
      age: dtoS.age,
      isAlive: dtoS.isAlive,
    };

    const loy = Math.round(Math.random() * (10 - 0));
    super(dtoSquire, "Soy un looser", path);
    this.knight = "Jamie Lannister";
    this.loyalty = loy;
  }

  assKissing() {
    return this.loyalty;
  }
}
