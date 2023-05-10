import React, { useState } from "react";
import Provider from "../Provider/Provider";
import Community from "../Community/Community";
import "./Hero.css";
import image from "../../../Assets/Images/0ed01787-00bc-4b3f-b598-ef3ca2ee698c 2.png";



const Hero = () => {
  const [selected, setSelected] = useState("Select Disease");

  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-image-container">
          <img src={image} alt="" />
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
      <Provider selected={selected} setSelected={setSelected} />
      <Community />
    </>
  );
};

export default Hero;
