import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { list } from "../data";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = ({ people }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    pauseToHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
export default SlickCarousel;
