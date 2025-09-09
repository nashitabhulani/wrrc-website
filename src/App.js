import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import Resources from "./pages/Resources";
import GetInvolved from "./pages/GetInvolved";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="whoweare"><WhoWeAre /></section>
      <section id="resources"><Resources /></section>
      <section id="getinvolved"><GetInvolved /></section>
      <section id="contactus"><ContactUs /></section>
    </>
  );
}

export default App;
