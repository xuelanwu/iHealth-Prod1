import { useState, useEffect, useRef } from "react";

import "./index.css";

const HowItWorksCard = ({ icon, title, content, idx, isVisible }) => {
  const buttonStyles = (index) => {
    return index % 2 === 0
      ? "even"
      : "odd";
  };
  return (
    <div
      className={`how-it-works-card  ${isVisible ? "visible" : ""}`}
      key={title}
    >
      <div className="how-it-works-block">
        <h3 className="how-it-works-number">{idx}</h3>

        <div className="how-it-works-nested-block">
          <div className="how-it-works-icon">{icon}</div>
          <div className={`how-it-works-button ${buttonStyles(idx)}`}>
            <p className="how-it-works-button-label">{title}</p>
          </div>
          <p className={`how-it-works-content`}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
