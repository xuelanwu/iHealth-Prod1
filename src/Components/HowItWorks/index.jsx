import React, { useState, useRef, useEffect } from "react";

import HowItWorksCard from "./HowItWorksCard";
import BenefitCard from "./BenefitCard";

import HowItWorksSteps from "../../Constants/HowItWorks.js";
import Benefit from "../../Constants/Benefit.js";

import "./index.css";

const HowItWorks = () => {
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
    <div className="how-it-works-container">
      <h1 className="how-it-works-title">How It Works</h1>
      <div className="how-it-works-cards-container" ref={divRef}>
        {HowItWorksSteps.map((step, idx) => (
          <HowItWorksCard
            icon={<img src={step.image} alt="" width="32px" height="32px" />}
            title={step.title}
            content={step.content}
            idx={idx + 1}
            key={step.title}
            isVisible={isVisible}
          />
        ))}
      </div>
      <div className="how-it-works-benefit-container">
        {Benefit.map((benefit) => {
          return <BenefitCard key={benefit.title} benefit={benefit} />;
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
