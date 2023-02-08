import { Card } from "../../../features/card/card";
import { CHARS } from "../mocks/character-data";

export function CardContainer() {
  return (
    <section className="container">
      <Card {...CHARS}></Card>
    </section>
  );
}
