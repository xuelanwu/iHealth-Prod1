import { useState, useRef, useEffect } from "react";

import Services from "src/Constants/OurServices";
import OurServicesCard from "./OurServicesCard";

import "./index.css";

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const div = divRef.current;
      if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page-our-services-container">
      <div className="home-page-our-services-title-block">
        <h2>Our Services</h2>
      </div>
      <div
        className={`home-page-our-services-inner ${
          isVisible ? "slide-in" : ""
        }`}
        ref={divRef}
      >
        {Services.map((service) => (
          <OurServicesCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
