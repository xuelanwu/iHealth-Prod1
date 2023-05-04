import { useState, useRef, useEffect } from "react";

import "./index.css";

const BenefitCard = ({ benefit }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;

    const handleScroll = () => {
      if (div) {
        const rect = div.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          if (!div.classList.contains("flip")) {
            div.classList.add("flip");
          }
        } else {
          div.classList.remove("flip");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      div.removeEventListener("mouseenter", () => {
        if (!div.classList.contains("flip")) {
          div.classList.add("flip");
        }
      });
      div.removeEventListener("mouseleave", () => {
        if (div.classList.contains("flip")) {
          div.classList.remove("flip");
        }
      });
    };
  }, []);

  useEffect(() => {
    const div = divRef.current;
    const handleHover = () => {
      if (!div.classList.contains("flip")) {
        div.classList.add("flip");
      } else div.classList.remove("flip");
    };
    div.addEventListener("mouseenter", handleHover);

    div.addEventListener("mouseleave", handleHover);
    return () => {
      div.removeEventListener("mouseenter", handleHover);
      div.removeEventListener("mouseleave", handleHover);
    };
  }, []);

  return (
    <div className={`benefit-card`}>
      <div className="benefit-flip-card" ref={divRef}>
        <div className="benefit-flip-card-inner">
          <div className="benefit-flip-card-front">
            <img className="benefit-img" src={benefit.image}></img>
          </div>
          <div className="benefit-flip-card-back">
            <p className="benefit-detail-summary-text">{benefit.summary}</p>
            <ol className="benefit-detail-list">
              {benefit.details.map((detail) => (
                <li className="benefit-detail-listitems-text" key={detail}>
                  {detail}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="benefit-title-box">{benefit.title}</div>
    </div>
  );
};
export default BenefitCard;
