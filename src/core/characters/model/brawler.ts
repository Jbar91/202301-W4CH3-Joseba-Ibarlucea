import { Character, DtoCharacter } from "./character";

export class Brawler extends Character {
  public weapon: string;
  public dexterity: number;

  constructor(dtoB: DtoCharacter, weapon: string, path: string) {
    const dtoBrawler: DtoCharacter = {
      series: dtoB.series,
      name: dtoB.name,
      family: dtoB.family,
      age: dtoB.age,
      isAlive: dtoB.isAlive,
    };
    const dex = Math.round(Math.random() * (10 - 0));
    super(dtoBrawler, "Primero pego y luego pregunto", path);
    this.weapon = weapon;
    this.dexterity = dex;
  }

  skill() {
    return this.dexterity;
  }
}
