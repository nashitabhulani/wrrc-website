import React, { useEffect, useState } from "react";
import logo from "../assets/WRRC-LOGO.png";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="WRRC logo" />
      </div>

      <ul className="nav-menu">
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setActiveSection("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#whoweare"
            className={activeSection === "whoweare" ? "active" : ""}
            onClick={() => setActiveSection("whoweare")}
          >
            Who We Are
          </a>
        </li>
        <li>
          <a
            href="#resources"
            className={activeSection === "resources" ? "active" : ""}
            onClick={() => setActiveSection("resources")}
          >
            Resources
          </a>
        </li>
        <li>
          <a
            href="#getinvolved"
            className={activeSection === "getinvolved" ? "active" : ""}
            onClick={() => setActiveSection("getinvolved")}
          >
            Get Involved
          </a>
        </li>
        <li>
          <a
            href="#contactus"
            className={activeSection === "contactus" ? "active" : ""}
            onClick={() => setActiveSection("contactus")}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
