import React from "react";
import "./Home.css";


import logo1 from "../Components/assets/Group-358.png";
import logo2 from "../Components/assets/Group-359.png";
import logo3 from "../Components/assets/Group-360.png";
import logo4 from "../Components/assets/Group-361.png";
import logo5 from "../Components/assets/Group-362.png";
import logo6 from "../Components/assets/Group-358 (1).png";
import logo7 from "../Components/assets/Group-361.png";

const GetInvolved = () => {
  return (
    <div className="get-involved">
  
      <section className="supporters">
        <h2>Our Supporters & Partners</h2>
        <div className="logos">
          <img src={logo1} alt="partner 1" />
          <img src={logo2} alt="partner 2" />
          <img src={logo3} alt="partner 3" />
          <img src={logo4} alt="partner 4" />
          <img src={logo5} alt="partner 5" />
          <img src={logo6} alt="partner 6" />
          <img src={logo7} alt="partner 7" />
        </div>
      </section>

      <section className="involved-gray">
        <div className="involved-img"></div>
        <div className="involved-text">
          <h2>Your support can save lives</h2>
          <p>
            By supporting WRRC, you’re directly contributing to wildlife rescue,
            rehabilitation, and conservation. Together with our partners, we’re
            building a safer world for animals.
          </p>
          <button className="btn-primary">Become a Partner</button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
