import { useState } from "react";
import { shortList, longList, list } from "../data";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);
  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article key={id} className="slide">
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
          </article>
        );
      })}
    </section>
  );
};
export default Carousel;
