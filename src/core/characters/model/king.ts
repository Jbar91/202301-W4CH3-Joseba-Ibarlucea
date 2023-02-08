import { Character, DtoCharacter } from "./character";

export class King extends Character {
  public reign: number;

  constructor(dtoK: DtoCharacter, reign: number, path: string) {
    const dtoCharacter: DtoCharacter = {
      series: dtoK.series,
      name: dtoK.name,
      family: dtoK.family,
      age: dtoK.age,
      isAlive: dtoK.isAlive,
    };
    super(dtoCharacter, "Vais a morir todos", path);
    this.reign = reign;
  }
}
