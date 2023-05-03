import { useState, useEffect, useRef } from "react";

import "./index.css";

const HowItWorksCard = ({ icon, title, content, idx }) => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const div = divRef.current;
      if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
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
    <div className="how-it-works-card" key={title}>
      <div className="how-it-works-icon-block">
        <div className="how-it-works-icon">{icon}</div>
        <h3 className="how-it-works-number">{idx}</h3>
      </div>
      <div className="how-it-works-text-block">
        <p className="how-it-works-subtitle">{title}</p>
        <p
          ref={divRef}
          className={`how-it-works-content ${isVisible ? "visible" : ""}`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
