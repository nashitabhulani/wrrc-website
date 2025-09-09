import React from "react";
import "./Home.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="contactus" id="contactus">
      <div className="contact-container">
        {/* Column 1 */}
        <div className="contact-column">
          <h3>WRRC</h3>
          <p>
            The Wildlife Rescue & Rehabilitation Centre (WRRC) was registered in
            July 1999 as a public charitable Trust for the conservation and
            welfare of wildlife in urban and rural areas around Bangalore, India.
            WRRC was set up by the trustees of Compassion Unlimited Plus Action
            (CUPA), in response to a keenly felt need: to provide relief to wild
            animals, birds and reptiles.
          </p>
        </div>

        {/* Column 2 */}
        <div className="contact-column">
          <h3>Recent Posts</h3>
          <ul>
            <li>Our Elephants Get A New Home in Lakshmisagar</li>
            <li>April-May 2020 | Round Up</li>
            <li>October – November Round-up</li>
            <li>Bonding with the Gentle Giants</li>
            <li>This Holi, Go Wild</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="contact-column">
          <h3>Address</h3>
          <p>
            WRRC Head Office, <br />
            Flat A4, Kensington Apts, <br />
            18/1 Ulsoor Cross Road, <br />
            Off Bazaar Street, <br />
            Ulsoor, Bengaluru – 560008
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
