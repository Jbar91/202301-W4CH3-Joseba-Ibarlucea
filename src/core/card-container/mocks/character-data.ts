import { Brawler } from "../../characters/model/brawler";
import { King } from "../../characters/model/king";
import { RightHand } from "../../characters/model/right-hand";
import { Squire } from "../../characters/model/squire";

const joffrey = new King(
  {
    series: "Juego de Tronos",
    name: "Joffrey",
    family: "Baratheon",
    age: 19,
    isAlive: true,
  },
  1,
  "assets/joffrey.jpg"
);

const jaime = new Brawler(
  {
    series: "Juego de Tronos",
    name: "Jamie",
    family: "Lannister",
    age: 34,
    isAlive: true,
  },
  "Sword",
  "assets/jaime.jpg"
);

const daenerys = new Brawler(
  {
    series: "Juego de Tronos",
    name: "Daenerys",
    family: "Targaryen",
    age: 22,
    isAlive: true,
  },
  "Dragon",
  "assets/daenerys.jpg"
);

const tyrion = new RightHand(
  {
    series: "Juego de Tronos",
    name: "Tyrion",
    family: "Lannister",
    age: 27,
    isAlive: true,
  },
  "Daenerys Targaryen",
  "assets/tyrion.jpg"
);

const bronn = new Squire(
  {
    series: "Juego de Tronos",
    name: "Bronn",
    family: "Bronn",
    age: 35,
    isAlive: true,
  },
  "assets/bronn.jpg"
);

export const CHARS = [joffrey, jaime, daenerys, tyrion, bronn];
