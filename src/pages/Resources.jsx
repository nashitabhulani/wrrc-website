import React from "react";
import Slider from "react-slick";
import "./Home.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import story1 from "../Components/assets/download (2).png";
import story2 from "../Components/assets/download (3).png";
import story3 from "../Components/assets/download (4).png";
import story4 from "../Components/assets/download (5).png";
import story5 from "../Components/assets/download (7).png";

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
   →
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
       ←
  </div>
);

const Resources = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600, 
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="stories" id="stories">
      <h2>Rescue Stories That Inspire Us</h2>
      <Slider {...settings} className="stories-slider">
        <div className="story-card">
          <img src={story1} alt="Rescue Story 1" />
          <h3>Rescued Dog</h3>
          <p>
            Meet Tara, rescued from captivity and now thriving in a safe
            sanctuary.
          </p>
        </div>
        <div className="story-card">
          <img src={story2} alt="Rescue Story 2" />
          <h3>Saved from the Wildfire</h3>
          <p>
            Dozens of animals were given a second chance after a devastating
            forest fire.
          </p>
        </div>
        <div className="story-card">
          <img src={story3} alt="Rescue Story 3" />
          <h3>Rehabilitated Rabbit</h3>
          <p>
            A rabbit successfully reintroduced into its natural habitat after
            rehabilitation.
          </p>
        </div>
        <div className="story-card">
          <img src={story4} alt="Rescue Story 4" />
          <h3>Rehabilitated Goat</h3>
          <p>
            A goat successfully reintroduced into its natural habitat after
            rehabilitation.
          </p>
        </div>
        <div className="story-card">
          <img src={story5} alt="Rescue Story 4" />
          <h3>Rehabilitated Goat</h3>
          <p>
            A goat successfully reintroduced into its natural habitat after
            rehabilitation.
          </p>
        </div>
      </Slider>
      <div className="green-strip">
        <h1>How you can make <br/>a difference</h1>
         <button className="btn-primary">Donate Now</button>
      </div>
    </section>
  );
};

export default Resources;
