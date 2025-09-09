import React from "react";
import "./Home.css";
import missionImg from "../Components/assets/Group-363-768x830.webp"; 

const WhoWeAre = () => {
  return (
    <section className="whoweare" id="whoweare">
      <div className="whoweare-container">
        <div className="whoweare-img">
          <img src={missionImg} alt="WRRC mission" />
        </div>

        <div className="whoweare-text">
          <h2>Who We Are.</h2>
          <h3>WRRC’s Mission</h3>
          <p>
            We are dedicated to rescuing, rehabilitating, and preserving wildlife.
            Our mission is to protect animals and their habitats through rescue
            efforts, awareness programs, and conservation activities.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
