import React from "react";
import "./Home.css";
import heroImg from "../Components/assets/download.png"; 

const Home = () => {
  return (
    <div>

      <section className="hero">
        <div className="hero-text">
          <h1>
            TOGETHER,<br/> WE RESCUE,
            <br /> REHABILITATE, <br /> AND PRESERVE.
          </h1>
          <p>Join our fight to rescue and rehabilitate endangered animals.</p>
          <button className="btn-primary">Donate Now</button>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="hero" />
        </div>
      </section>

   

<section className="impact">
  <h2>Our Impact So Far.</h2>
  <div className="impact-stats">
    <div><h3>500+</h3><p>Animals Rescued</p></div>
    <div><h3>10,000+</h3><p>Acres Protected</p></div>
    <div><h3>100+</h3><p>Species Rehabilitated</p></div>
  </div>
</section>

    </div>
  );
};

export default Home;
