export type DtoCharacter = {
  series: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
};

export class Character {
  public series: string;
  public name: string;
  public family: string;
  public age: number;
  public isAlive: boolean;
  public path: string;
  readonly message: string;
  constructor(dto: DtoCharacter, message: string, path: string) {
    this.series = dto.series;
    this.name = dto.name;
    this.family = dto.family;
    this.age = dto.age;
    this.isAlive = true;
    this.message = message;
    this.path = path;
  }

  communicate() {
    console.log(this.message);
  }

  state() {
    return this.isAlive ? `I'm alive` : `I'm dead`;
  }

  perish() {
    this.isAlive = false;
  }
}
