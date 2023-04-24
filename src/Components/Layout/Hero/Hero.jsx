import React from "react";
import Community from "../Community/Community";
import "./Hero.css";
import image from "../../../Assets/Images/happy-doctor.jpg";
const Hero = () => {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text-container">
          <img src={image} alt="" />
          <h5 className="comitted">-Committed to success</h5>
          <h2 className="healthcare">Revolutionizing Healthcare</h2>
          <h3 className="complex">For Patients with Complex Diseases</h3>
          <h4 className="integrated">
            Our integrated platform empowers patients and improves Healthcare
            Outcomes
          </h4>
        </div>
      </div>
      <Community />
    </>
  );
};

export default Hero;
