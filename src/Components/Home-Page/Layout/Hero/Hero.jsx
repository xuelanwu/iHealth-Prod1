//Import Libraries/Packages
import React, { useState } from 'react'


//Import Styles
import "./Hero.css";


//import local assets/files/components
import Provider from "./SubComponents/Provider/Provider";
import Community from "./SubComponents/Community/Community";
import imageforHero from "../../../../Assets/Images/hero-main-pic.png";



const Hero = () => 
{


  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-image-container">
          <img src={imageforHero} loading='lazy' alt="Doctor with patients image for Hero section" />
        </div>
        <div className="hero-text-container">
          <h5 className="comitted">-Committed to success</h5>
          <h2 className="healthcare">Revolutionizing Healthcare</h2>
          <h3 className="complex">For Patients with Complex Diseases</h3>
          <h4 className="integrated">
            Our integrated platform empowers patients and improves Healthcare
            Outcomes
          </h4>
        </div>
      </div>
      <Provider /> 
      <Community />
    </>
  );
};

export default Hero;
