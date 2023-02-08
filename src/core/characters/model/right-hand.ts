import { Character, DtoCharacter } from "./character";

export class RightHand extends Character {
  public assess: string;
  constructor(dtoRH: DtoCharacter, assess: string, path: string) {
    const dtoRHand: DtoCharacter = {
      series: dtoRH.series,
      name: dtoRH.name,
      family: dtoRH.family,
      age: dtoRH.age,
      isAlive: dtoRH.isAlive,
    };
    super(dtoRHand, "No se por que, pero creo que voy a morir pronto", path);
    this.assess = assess;
  }

  hand() {
    return this.assess;
  }
}
