import { useState, useEffect, useRef } from "react";

import "./index.css";

const HowItWorksCard = ({ icon, title, content, idx, isVisible }) => {
  return (
    <div
      className={`how-it-works-card  ${isVisible ? "visible" : ""}`}
      key={title}
    >
      <div className="how-it-works-icon-block">
        <div className="how-it-works-icon">{icon}</div>
        <h3 className="how-it-works-number">{idx}</h3>
      </div>
      <div className="how-it-works-text-block">
        <p className="how-it-works-subtitle">{title}</p>
        <p className={`how-it-works-content`}>{content}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
