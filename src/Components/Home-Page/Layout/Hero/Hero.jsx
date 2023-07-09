//Import Libraries/Packages
import React, { useState } from "react";

//Import Styles
import "./Hero.css";

//import local assets/files/components
import HeroMobile from "src/Assets/Images/hero-5x.png";
import HeroDesktop from "src/Assets/Images/hero-1.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-container-inner">
        <div className="hero-heading-container">
          <h3 className="hero-heading-h3">
            <HandshakeOutlinedIcon />
            Committed to success
          </h3>
          <h1 className="hero-heading-h1">Revolutionizing Healthcare</h1>
          <h2 className="hero-heading-h2">
            For Patients with Complex Diseases
          </h2>
          <h4 className="hero-heading-h4">
            Our integrated platform empowers patients and improves Healthcare
            Outcomes
          </h4>
        </div>
        <div className="hero-image-container">
          <img
            className="hero-img"
            src={HeroMobile}
            alt="Doctor with patients image for Hero section"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
